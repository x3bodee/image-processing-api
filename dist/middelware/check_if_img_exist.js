"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var check = function (req, res, next) {
    var _a;
    var assets_img_path = path_1.default.join(__dirname, '../../assets/' + req.query.name + '.jpg');
    if (fs_1.default.existsSync(assets_img_path)) {
        // console.log('file exist', 'assets');
        req.file_exist = true;
        next();
    }
    else {
        // console.log("file don't exist", 'assets');
        (_a = req.errMsg) === null || _a === void 0 ? void 0 : _a.push("file don't exist");
        req.error = true;
        //   res
        //     .status(400)
        //     .json({ sucess: false, msg: req.query.name + " img don't exist" });
        next();
    }
};
exports.default = check;
