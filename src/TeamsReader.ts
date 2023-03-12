// import { dateStringToDate } from './utils/utils';
// import { MatchResult } from './GameResult';
import { TeamData } from './TeamData';
import { CsvFileReader } from './CsvReader';

interface DataReader {
  read(): void;
  data: string[][];
}

export class TeamsReader {
  //Static methods can be called with having to create an instance of a class
  static fromCsv(filename: string): TeamsReader {
    return new TeamsReader(new CsvFileReader(filename));
  }

  teamDetails: TeamData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.teamDetails = this.reader.data.map((row: string[]): TeamData => {
      // console.log(row);
      return [
        parseInt(row[0]),
        parseInt(row[1]),
        parseInt(row[2]),
        parseInt(row[3]),
        row[4],
        row[5],
        parseInt(row[6]),
        row[7],
        //TYPE ASSERTION
        row[8], //H, A, D
        parseInt(row[9]),
        row[10],
        row[11],
        row[12],
        row[13],
      ];
    });
  }
}
