import { TeamAnalysis } from './Analysis';
import { TeamData } from './TeamData';
import { HtmlReport } from './displayresult/HtmlReport';

export interface Analyzer {
  run(matches: TeamData[]): string | undefined;
}

export interface OutputTarget {
  print(report: string | undefined): void;
}

export class Summary {
  //'static' allows us to call a method without creating an instance

  static TeamDetailsWithHtmlReport(team: string): Summary {
    return new Summary(new TeamAnalysis(team), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(teams: TeamData[]): void {
    const matchReport = this.analyzer.run(teams);

    this.outputTarget.print(matchReport);
  }
}
