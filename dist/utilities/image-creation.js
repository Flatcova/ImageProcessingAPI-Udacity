"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageCreation = void 0;
const sharp_1 = __importDefault(require("sharp"));
const imageCreation = async (input, context) => {
    const { name, width, height, inputDir, outputDir } = input;
    context.logger.info('imageCreation starting', { input });
    try {
        await (0, sharp_1.default)(`${inputDir}/${name}.jpg`)
            .resize(width, height, { fit: 'contain' })
            .toFile(outputDir + `/${name}-${width}x${height}.jpg`);
        context.logger.info('image created successfully');
        return true;
    }
    catch (error) {
        context.logger.error('Error while creating new image', { error });
        return false;
    }
};
exports.imageCreation = imageCreation;
