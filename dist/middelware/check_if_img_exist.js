"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var check_if_exist_1 = __importDefault(require("../helper/check_if_exist"));
var check = function (req, res, next) {
    var assets_img_path = path_1.default.join(__dirname, '../../assets/' + req.query.name + '.jpg');
    if ((0, check_if_exist_1.default)(assets_img_path)) {
        console.log("file exist", "assets");
        req.file_exist = true;
        next();
    }
    else {
        console.log("file don't exist", "assets");
        res.status(400).json({ sucess: false, msg: req.query.name + " img don't exist" });
    }
};
exports.default = check;
