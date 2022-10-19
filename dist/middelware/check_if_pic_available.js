"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
// class Request2 extends Request{
//     file_exist: boolean=true;
// }
var check = function (req, res, next) {
    var name = "".concat(req.query.name, "-").concat(req.query.width, "-").concat(req.query.height);
    console.log(req.query);
    console.log(name);
    var img_path = path_1.default.join(__dirname, '../../processed-imgs/' + name + '.jpg');
    if (fs_1.default.existsSync(img_path)) {
        console.log("file exist");
        console.log("sending the file");
        req.file_exist = true;
        res.status(200).sendFile(img_path);
    }
    else {
        console.log("file don't exist");
        console.log("create the file again");
        req.file_exist = true;
        next();
    }
};
var check_in_assets = function (path) {
    if (fs_1.default.existsSync(path)) {
        console.log("file exist");
        console.log("sending the file");
        res.status(200).sendFile(img_path);
    }
    else {
        console.log("file don't exist");
        console.log("create the file again");
        next();
    }
};
var check_in_processed = function (path) {
    if (fs_1.default.existsSync(path)) {
        console.log("file exist");
        console.log("sending the file");
        res.status(200).sendFile(img_path);
    }
    else {
        console.log("file don't exist");
        console.log("create the file again");
        next();
    }
};
exports.default = check;
