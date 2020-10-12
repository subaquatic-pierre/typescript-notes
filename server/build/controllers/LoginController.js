"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("./decorators/routes");
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.getLogin = function (req, res) {
        res.send("\n        <div>\n        <h2>Name</h2>\n            <form method='POST'>\n                <div>\n                    <label for=\"userName\">Name (4 to 8 characters):</label>\n                    <input type=\"text\" id=\"userName\" name=\"userName\" >\n                </div>\n                <div>\n                    <label for=\"password\">Password</label>\n                    <input name=\"password\" id=\"password\" type=\"password\" placeholder=\"Enter your password\">\n                </div>\n                    <button>Submit</button>\n            </form>\n        </div>\n        ");
    };
    __decorate([
        routes_1.get('/login'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogin", null);
    LoginController = __decorate([
        routes_1.controller()
    ], LoginController);
    return LoginController;
}());