"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageCache = void 0;
const types_1 = require("../types");
const image_validation_1 = require("../utilities/image-validation");
const logger_1 = require("../utilities/logger");
const imageCache = async (req, res, next) => {
    const values = {
        name: req.query.name,
        width: Number(req.query.width),
        height: Number(req.query.height),
        inputDir: types_1.INPUT_DIR,
        outputDir: types_1.OUTPUT_DIR,
    };
    if (await (0, image_validation_1.imageExists)(values)) {
        logger_1.context.logger.info('File was found in cache');
        return res.sendFile(types_1.FULL_PATH + `/${values.name}-${values.width}x${values.height}.jpg`);
    }
    else {
        logger_1.context.logger.warn('File not found, continue with creation');
        res.locals.values = values;
        next();
    }
};
exports.imageCache = imageCache;
