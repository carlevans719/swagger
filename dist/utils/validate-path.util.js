"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePath = void 0;
exports.validatePath = (inputPath) => inputPath.charAt(0) !== '/' ? '/' + inputPath : inputPath;
