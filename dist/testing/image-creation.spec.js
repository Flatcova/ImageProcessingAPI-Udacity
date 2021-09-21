"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const image_creation_1 = require("../utilities/image-creation");
const logger_1 = require("../utilities/logger");
describe('Tests for image creation', () => {
    const goodData = {
        name: 'fjord',
        width: 150,
        height: 150,
        inputDir: types_1.INPUT_DIR,
        outputDir: types_1.OUTPUT_DIR,
    };
    const badData = {
        name: 'cart',
        width: 12,
        height: 23,
        inputDir: types_1.INPUT_DIR,
        outputDir: types_1.OUTPUT_DIR,
    };
    describe('function imageCreation that use Sharp to create new image.', () => {
        it('Should create the new image with the params', async () => {
            expect(await (0, image_creation_1.imageCreation)(goodData, logger_1.context)).toBeTruthy();
        });
        it('Should return an error for file not created ', async () => {
            expect(await (0, image_creation_1.imageCreation)(badData, logger_1.context)).toBeFalse();
        });
    });
});
