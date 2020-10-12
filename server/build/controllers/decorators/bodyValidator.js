"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyValidator = exports.validateBody = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
function validateBody(keys) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(403).send('The request does not have a body');
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (key in req.body === false) {
                res.status(405).send("The body did not contain a " + key + " field");
                return;
            }
        }
        next();
        return;
    };
}
exports.validateBody = validateBody;
function bodyValidator() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    return function (target, key, desc) {
        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.validator, keys, target, key);
    };
}
exports.bodyValidator = bodyValidator;
