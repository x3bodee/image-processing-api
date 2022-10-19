"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var check_if_exist_1 = __importDefault(require("../helper/check_if_exist"));
var check = function (req, res, next) {
    var name = "".concat(req.query.name, "-").concat(req.query.width, "-").concat(req.query.height);
    console.log(req.query);
    console.log(name);
    var assets_img_path = path_1.default.join(__dirname, '../../assets/' + req.query.name + '.jpg');
    var processed_img_path = path_1.default.join(__dirname, '../../processed-imgs/' + name + '.jpg');
    if ((0, check_if_exist_1.default)(processed_img_path)) {
        console.log("file exist", "processed");
        req.file_exist = true;
        res.status(200).sendFile(processed_img_path);
    }
    else {
        console.log("file don't exist", "processed");
        req.file_exist = false;
        next();
    }
};
exports.default = check;
