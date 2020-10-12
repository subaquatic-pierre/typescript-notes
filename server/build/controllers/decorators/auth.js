"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.validateAuth = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
function validateAuth(username, password) {
    return function (req, res, next) {
        if (req.session && req.session.loggedIn === true) {
            next();
            return;
        }
        res.status(403).send('<h2>Permission denied, you are not allowed to view this page</h2>');
        return;
    };
}
exports.validateAuth = validateAuth;
function auth() {
    return function (target, key, desc) {
        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.auth, true, target, key);
    };
}
exports.auth = auth;
