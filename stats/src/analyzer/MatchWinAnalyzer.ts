import { MatchData } from "../parser/MatchData";
import { MatchResult } from "../parser/MatchResult";
import { Analyzer } from "./Analyzer";

export class MatchWinAnalyzer implements Analyzer {
  analyze(matches: MatchData[], team: string): string {
    let winCount = 0;
    for (let match of matches) {
      if (match[1] == team && match[5] == MatchResult.HomeWin) {
        winCount++;
      } else if (match[2] == team && match[5] == MatchResult.AwayWin) {
        winCount++;
      }
    }

    return `${team} won ${winCount} many times last year !`;
  }
}
