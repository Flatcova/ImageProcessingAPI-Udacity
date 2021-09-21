"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageExists = void 0;
const fs_1 = require("fs");
const logger_1 = require("../utilities/logger");
const imageExists = async (input) => {
    try {
        await fs_1.promises.access(`${input.outputDir}/${input.name}-${input.width}x${input.height}.jpg`, fs_1.constants.F_OK);
        logger_1.context.logger.info('Successfull finding existing file in cache');
        return true;
    }
    catch (error) {
        logger_1.context.logger.error('File not found in cache', { error });
        return false;
    }
};
exports.imageExists = imageExists;
