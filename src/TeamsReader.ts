import { TeamData } from './TeamData';
import { CsvFileReader } from './CsvReader';

interface DataReader {
  read(): void;
  data: string[][];
}

export class TeamsReader {
  static fromCsv(filename: string): TeamsReader {
    return new TeamsReader(new CsvFileReader(filename));
  }

  teamDetails: TeamData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.teamDetails = this.reader.data.map((row: string[]): TeamData => {
      return [
        parseInt(row[0]),
        parseInt(row[1]),
        parseInt(row[2]),
        parseInt(row[3]),
        row[4],
        row[5],
        parseInt(row[6]),
        row[7],
        row[8],
        parseInt(row[9]),
        row[10],
        row[11],
        row[12],
        row[13],
      ];
    });
  }
}
