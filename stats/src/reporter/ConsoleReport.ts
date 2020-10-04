import { Reporter } from "../reporter/Reporter";

export class ConsoleReport implements Reporter {
  print(report: string): void {
    console.log(report);
  }
}
