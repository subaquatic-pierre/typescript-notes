"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvReader = void 0;
var fs_1 = __importDefault(require("fs"));
var CsvReader = /** @class */ (function () {
    function CsvReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.filename, { encoding: "utf-8" })
            .split("\n")
            .map(function (row) {
            return row.split(",");
        })
            .map(this.mapRow);
    };
    return CsvReader;
}());
exports.CsvReader = CsvReader;
