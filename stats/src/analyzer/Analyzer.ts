import { MatchData } from "../parser/MatchData";

export interface Analyzer {
  analyze(matches: MatchData[], team: string): string;
}
