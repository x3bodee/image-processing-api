"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var check_Query = function (req, res, next) {
    console.log(req.query);
    if (!req.query.name || !req.query.width || !req.query.height)
        res.status(400).json({ status: "fail", msg: "name or width or height is missing the URL" });
    else
        next();
};
exports.default = check_Query;
