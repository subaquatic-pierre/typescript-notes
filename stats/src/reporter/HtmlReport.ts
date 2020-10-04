import { Reporter } from "../reporter/Reporter";
import fs from "fs";

export class HtmlReport implements Reporter {
  print(report: string): void {
    const html = `
        <h1>Report Data</h1>
        <p>${report}</p>
        `;
    fs.writeFileSync("report.html", html);
  }
}
