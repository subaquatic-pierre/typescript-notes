"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchWinAnalyzer = void 0;
var MatchResult_1 = require("./MatchResult");
var MatchWinAnalyzer = /** @class */ (function () {
    function MatchWinAnalyzer() {
    }
    MatchWinAnalyzer.prototype.analyze = function (matches, team) {
        var winCount = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] == team && match[5] == MatchResult_1.MatchResult.HomeWin) {
                winCount++;
            }
            else if (match[2] == team && match[5] == MatchResult_1.MatchResult.AwayWin) {
                winCount++;
            }
        }
        return team + " won " + winCount + " many times last year !";
    };
    return MatchWinAnalyzer;
}());
exports.MatchWinAnalyzer = MatchWinAnalyzer;
