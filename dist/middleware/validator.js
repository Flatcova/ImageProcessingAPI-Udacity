"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationInputs = exports.validate = void 0;
const ajv_1 = __importDefault(require("ajv"));
const logger_1 = require("../utilities/logger");
const ajv = new ajv_1.default();
const imageRestrictions = { type: 'number', maximum: 1000, minimum: 100 };
const validationScheme = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        width: imageRestrictions,
        height: imageRestrictions,
    },
    required: ['name', 'width', 'height'],
};
exports.validate = ajv.compile(validationScheme);
const validationInputs = async (req, res, next) => {
    const inputs = {
        name: req.query.name,
        width: Number(req.query.width),
        height: Number(req.query.height),
    };
    const valid = (0, exports.validate)(inputs);
    if (!valid) {
        logger_1.context.logger.error(exports.validate.errors);
        return res.status(400).send(`${ajv.errorsText(exports.validate.errors)}`);
    }
    res.locals.input = inputs;
    next();
};
exports.validationInputs = validationInputs;
