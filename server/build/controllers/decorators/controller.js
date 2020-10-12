"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = exports.controller = void 0;
var AppRouter_1 = require("../../AppRouter");
var MetadataKeys_1 = require("./MetadataKeys");
var bodyValidator_1 = require("./bodyValidator");
var auth_1 = require("./auth");
var router = AppRouter_1.AppRouter.getInstance();
exports.router = router;
/**
 * @decorator
 * Decorator from route controller class
 * Applies the path, middleware and route handler to each route
 * after looping through all routes with a path
 */
function controller() {
    return function (target) {
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.path, target.prototype, key);
            var method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.method, target.prototype, key);
            // Get middleware array
            var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target.prototype, key) || [];
            var keys = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.validator, target.prototype, key);
            if (keys) {
                middlewares.push(bodyValidator_1.validateBody(keys));
            }
            var auth = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.auth, target.prototype, key);
            if (auth) {
                middlewares.push(auth_1.validateAuth());
            }
            // Only apply handlers to methods with path metadata
            if (path) {
                router[method].apply(router, __spreadArrays([path], middlewares, [routeHandler]));
            }
        }
    };
}
exports.controller = controller;
