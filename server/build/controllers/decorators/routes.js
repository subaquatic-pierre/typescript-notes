"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = exports.get = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
var Methods_1 = require("./Methods");
/**
 * @function
 * @param {string} method - Applies method to be used with the route to the handler
 * @param {string} path - Path to be used with route
 * @decorator Returns a decorator to be used for each path method on Controller Class
 */
function bindMethod(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);
        };
    };
}
exports.get = bindMethod(Methods_1.Methods.get);
exports.post = bindMethod(Methods_1.Methods.post);
