"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var check_if_exist = function (path) {
    if (fs_1.default.existsSync(path))
        return true;
    else
        return false;
};
exports.default = check_if_exist;
