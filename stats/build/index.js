"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Summary_1 = require("./Summary");
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
var consoleReport = Summary_1.Summary.matchWinFromCsvConsoleReport();
consoleReport.generateReport("Man United");
var htmlReport = Summary_1.Summary.matchWinFromCsvHTMLReport();
htmlReport.generateReport("Liverpool");
