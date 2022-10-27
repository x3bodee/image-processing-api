"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isPositive_1 = __importDefault(require("../../helper/isPositive"));
it('expect isPositive(500) to be True', function () {
    expect((0, isPositive_1.default)(500)).toBeTrue();
});
it('expect isPositive(-350) to be False', function () {
    expect((0, isPositive_1.default)(-350)).toBeFalse();
});
it('expect isPositive(100) to be False', function () {
    expect((0, isPositive_1.default)(100)).toBeFalse();
});
