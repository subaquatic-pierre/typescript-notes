"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var AppRouter_1 = require("./AppRouter");
require("./controllers");
// import {router} from './controllers/decorators/controller'
var app = express_1.default();
var router = AppRouter_1.AppRouter.getInstance();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ secret: 'string' }));
app.use(router);
app.listen(3000, function () {
    console.log('Application listening on port 3000');
});
