"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
require("reflect-metadata");
/**
 * @function
 * @param {string} method - Applies method to be used with the route to the handler
 * @param {string} path - Path to be used with route
 * @decorator Returns a decorator to be used for each path method on Controller Class
 */
function bindMethod(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata('method', method, target, key);
            Reflect.defineMetadata('path', path, target, key);
        };
    };
}
exports.get = bindMethod('get');
