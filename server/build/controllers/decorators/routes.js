"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = exports.get = exports.controller = void 0;
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
exports.router = router;
function bindMethod(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata('method', method, target, key);
            Reflect.defineMetadata('path', path, target, key);
        };
    };
}
function controller() {
    return function (target) {
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata('path', target.prototype[key]);
            var method = Reflect.getMetadata('method', target.prototype[key]);
            var middleware = Reflect.getMetadata('middleware', target.prototype[key]);
            // Only apply handlers to methods with path metadata
            if (path) {
                // Check method metadata
                switch (method) {
                    case ('get'): {
                        router.get(path, middleware, routeHandler);
                    }
                }
            }
        }
    };
}
exports.controller = controller;
exports.get = bindMethod('get');
