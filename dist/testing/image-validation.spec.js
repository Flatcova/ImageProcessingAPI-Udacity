"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const image_validation_1 = require("../utilities/image-validation");
const types_1 = require("../types");
describe('Tests for image validations', () => {
    const goodData = {
        name: 'fjord',
        width: 100,
        height: 100,
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
    describe('function imageExists checks if image on file.', () => {
        it('Should say that the image exists', async () => {
            expect(await (0, image_validation_1.imageExists)(goodData)).toBeTruthy();
        });
        it('Should return be an error', async () => {
            expect(await (0, image_validation_1.imageExists)(badData)).toBeFalse();
        });
    });
});
