"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FULL_PATH = exports.OUTPUT_DIR = exports.INPUT_DIR = void 0;
const path_1 = __importDefault(require("path"));
exports.INPUT_DIR = './images';
exports.OUTPUT_DIR = './new-images';
exports.FULL_PATH = path_1.default.resolve('new-images');
