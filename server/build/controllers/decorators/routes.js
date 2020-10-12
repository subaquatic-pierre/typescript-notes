"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
require("reflect-metadata");
function bindMethod(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata('method', method, target, key);
            Reflect.defineMetadata('path', path, target, key);
        };
    };
}
exports.get = bindMethod('get');
