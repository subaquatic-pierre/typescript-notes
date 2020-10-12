"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var AppRouter_1 = require("../AppRouter");
var router = AppRouter_1.AppRouter.getInstance();
exports.router = router;
var authHandler = function (req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    else {
        res.status(403);
        res.send("\n            <h2>Permission denied, you are not allowed to view this page</h2>\n        ");
    }
};
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n            <h2>Hello User, you are logged in</h2>\n            <a href='/logout'><h3>Logout</h3></a>\n        ");
    }
    else {
        res.send("\n        <h2>You are not logged in</h2>\n        <a href='/login'><h3>Login</h3></a>\n        ");
    }
});
router.post('/login', function (req, res) {
    var _a = req.body, userName = _a.userName, password = _a.password;
    if (userName && password && userName === 'user' && password === 'password') {
        req.session = { loggedIn: true };
    }
    else {
        res.send("\n        <h3>Incorrect login credentials</h3>\n        ");
    }
    res.redirect('/');
});
router.get('/logout', function (req, res) {
    if (req.session && req.session.loggedIn) {
        req.session = null;
    }
    res.redirect('/');
});
router.get('/protected', authHandler, function (req, res) {
    res.send("\n    <h2>Welcome to your protected route!</h2>\n    ");
});
