"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const image_cache_1 = require("./middleware/image-cache");
const types_1 = require("./types");
const image_creation_1 = require("./utilities/image-creation");
const logger_1 = require("./utilities/logger");
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send('Welcome');
});
app.get('/image', image_cache_1.imageCache, async (req, res) => {
    const { width, height, name } = res.locals.values;
    if (await (0, image_creation_1.imageCreation)({
        ...res.locals.values,
        inputDir: types_1.INPUT_DIR,
        outputDir: types_1.OUTPUT_DIR,
    }, logger_1.context)) {
        return res.sendFile(types_1.FULL_PATH + `/${name}-${width}x${height}.jpg`);
    }
    return res.status(400).send('fail to process image');
});
app.listen(PORT, () => {
    console.log(`listening in port ${PORT}`);
});
