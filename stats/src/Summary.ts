import { Analyzer } from "./analyzer/Analyzer";
import { Parser } from "./parser/Parser";
import { Reporter } from "./reporter/Reporter";
import { MatchParser } from "./parser/MatchParser";
import { MatchWinAnalyzer } from "./analyzer/MatchWinAnalyzer";
import { ConsoleReport } from "./reporter/ConsoleReport";
import { HtmlReport } from "./reporter/HtmlReport";
import { CsvFileReader } from "./reader/CsvFileReader";

export class Summary {
  constructor(
    public parser: Parser,
    public analyzer: Analyzer,
    public reporter: Reporter
  ) {}

  generateReport(team: string): void {
    this.parser.load();
    const report = this.analyzer.analyze(this.parser.matches, team);
    this.reporter.print(report);
  }

  static matchWinFromCsvConsoleReport(): Summary {
    const reader = new CsvFileReader("football.csv");
    return new Summary(
      new MatchParser(reader),
      new MatchWinAnalyzer(),
      new ConsoleReport()
    );
  }

  static matchWinFromCsvHTMLReport(): Summary {
    const reader = new CsvFileReader("football.csv");
    return new Summary(
      new MatchParser(reader),
      new MatchWinAnalyzer(),
      new HtmlReport()
    );
  }
}
