"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var resize_route_1 = __importDefault(require("./routes/resize/resize.route"));
var app = (0, express_1.default)();
var PORT = process.env.PORT;
app.use('/resize', resize_route_1.default);
app.listen(PORT, function () {
    console.log("app running on port: ".concat(PORT));
});
exports.default = app;
