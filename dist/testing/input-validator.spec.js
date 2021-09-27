"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ajv_1 = __importDefault(require("ajv"));
const validator_1 = require("../middleware/validator");
const ajv = (0, ajv_1.default)();
describe('Testing validation functions', () => {
    it('should check for correct input params', () => {
        const validInput = {
            name: 'fjord',
            width: 100,
            height: 100,
        };
        expect((0, validator_1.validate)(validInput)).toBeTruthy();
    });
    it('Should result in error for name', () => {
        const invalidInput = {
            name: 450,
            width: 150,
            height: 150,
        };
        expect((0, validator_1.validate)(invalidInput)).toBeFalse();
        expect(ajv.errorsText(validator_1.validate.errors)).toEqual('data.name should be string');
    });
    it('Should result in error for width', () => {
        const invalidInput = {
            name: 'mios',
            width: Number('asdf'),
            height: 140,
        };
        expect((0, validator_1.validate)(invalidInput)).toBeFalse();
        expect(ajv.errorsText(validator_1.validate.errors)).toEqual('data.width should be <= 1000');
    });
    it('Should result in error for height', () => {
        const invalidInput = {
            name: 'mios',
            width: 150,
            height: Number('asdf'),
        };
        expect((0, validator_1.validate)(invalidInput)).toBeFalse();
        expect(ajv.errorsText(validator_1.validate.errors)).toEqual('data.height should be <= 1000');
    });
});
