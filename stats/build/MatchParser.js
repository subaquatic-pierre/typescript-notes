"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchParser = void 0;
var utils_1 = require("./utils");
var MatchParser = /** @class */ (function () {
    function MatchParser(reader, analyzer, reporter) {
        this.reader = reader;
        this.analyzer = analyzer;
        this.reporter = reporter;
        this.matches = [];
    }
    MatchParser.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (row) {
            return [
                utils_1.stringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    };
    MatchParser.prototype.generateReport = function (team) {
        var report = this.analyzer.analyze(this.matches, team);
        this.reporter.print(report);
    };
    return MatchParser;
}());
exports.MatchParser = MatchParser;
