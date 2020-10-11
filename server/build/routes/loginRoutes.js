"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.get('/', function (req, res) {
    res.send('<h1>Hello, world!</h1>');
});
router.get('/login', function (req, res) {
    res.send("\n    <div>\n    <h2>Name</h2>\n        <form method='POST'>\n            <div>\n                <label for=\"name\">Name (4 to 8 characters):</label>\n                <input type=\"text\" id=\"name\" name=\"name\" >\n            </div>\n            <div>\n                <label for=\"password\">Password</label>\n                <input name=\"password\" id=\"password\" type=\"password\" placeholder=\"Enter your password\">\n            </div>\n                <button>Submit</button>\n        </form>\n    </div>\n    ");
});
router.post('/login', function (req, res) {
    console.log(req.body);
    res.redirect('/');
});
