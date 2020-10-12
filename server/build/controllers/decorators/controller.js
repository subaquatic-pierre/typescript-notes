"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = exports.controller = void 0;
var AppRouter_1 = require("../../AppRouter");
var router = AppRouter_1.AppRouter.getInstance();
exports.router = router;
function controller() {
    return function (target) {
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata('path', target.prototype, key);
            var method = Reflect.getMetadata('method', target.prototype, key);
            // const middleware = Reflect.getMetadata('middleware', target.prototype, key)
            // Only apply handlers to methods with path metadata
            if (path) {
                // Check method metadata
                switch (method) {
                    case ('get'): {
                        router.get(path, routeHandler);
                    }
                }
            }
        }
    };
}
exports.controller = controller;
