import { MatchData } from "./MatchData";

export interface Parser {
  matches: MatchData[];
  load(): void;
}
