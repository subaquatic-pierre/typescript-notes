"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var MatchParser_1 = require("./parser/MatchParser");
var MatchWinAnalyzer_1 = require("./analyzer/MatchWinAnalyzer");
var ConsoleReport_1 = require("./reporter/ConsoleReport");
var HtmlReport_1 = require("./reporter/HtmlReport");
var CsvFileReader_1 = require("./reader/CsvFileReader");
var Summary = /** @class */ (function () {
    function Summary(parser, analyzer, reporter) {
        this.parser = parser;
        this.analyzer = analyzer;
        this.reporter = reporter;
    }
    Summary.prototype.generateReport = function (team) {
        this.parser.load();
        var report = this.analyzer.analyze(this.parser.matches, team);
        this.reporter.print(report);
    };
    Summary.matchWinFromCsvConsoleReport = function () {
        var reader = new CsvFileReader_1.CsvFileReader("football.csv");
        return new Summary(new MatchParser_1.MatchParser(reader), new MatchWinAnalyzer_1.MatchWinAnalyzer(), new ConsoleReport_1.ConsoleReport());
    };
    Summary.matchWinFromCsvHTMLReport = function () {
        var reader = new CsvFileReader_1.CsvFileReader("football.csv");
        return new Summary(new MatchParser_1.MatchParser(reader), new MatchWinAnalyzer_1.MatchWinAnalyzer(), new HtmlReport_1.HtmlReport());
    };
    return Summary;
}());
exports.Summary = Summary;
