"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constant_1 = require("./constant");
const app = express_1.default();
const ExpressRun = () => {
    app.get('/', function (req, res, next) {
        req;
        next;
        res.send('Hello World');
    });
    app.listen(constant_1.Port, constant_1.Host, () => {
        console.log('Working');
    });
};
ExpressRun();
//# sourceMappingURL=index.js.map