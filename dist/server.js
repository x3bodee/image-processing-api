"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
var PORT = 3000;
index_1.default.listen(PORT, function () {
    console.log("app running on port: ".concat(PORT));
});
