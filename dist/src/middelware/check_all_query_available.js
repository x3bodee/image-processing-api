"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isPositive_1 = __importDefault(require("../helper/isPositive"));
var check_Query = function (req, res, next) {
    console.log(req.query);
    if (!req.query.name || !req.query.width || !req.query.height) {
        var msg = "name or width or height is missing in the URL";
        req.errMsg = msg;
        req.error = true;
        // res.status(400).json({status:false, msg});
        next();
    }
    if (!(0, isPositive_1.default)(parseInt(req.query.width)) || !(0, isPositive_1.default)(parseInt(req.query.height))) {
        var msg = "width & height must contines positive values";
        req.errMsg = msg;
        req.error = true;
        // res.status(400).json({status:false, msg});
        next();
    }
    req.error = false;
    next();
};
exports.default = check_Query;
