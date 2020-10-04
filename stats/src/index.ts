import { Summary } from "./Summary";

// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const consoleReport = Summary.matchWinFromCsvConsoleReport();
consoleReport.generateReport("Man United");

const htmlReport = Summary.matchWinFromCsvHTMLReport();
htmlReport.generateReport("Liverpool");
