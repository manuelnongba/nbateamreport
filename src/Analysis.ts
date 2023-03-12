import { Analyzer } from './TeamDetails';
import { TeamData } from './TeamData';

export class TeamAnalysis implements Analyzer {
  constructor(public nbaTeam: string) {}
  run(teams: TeamData[]): string | undefined {
    for (let team of teams) {
      let thead: string = '';

      'LEAGUE_ID,TEAM_ID,MIN_YEAR,MAX_YEAR,ABBREVIATION,NICKNAME,YEARFOUNDED,CITY,ARENA,ARENACAPACITY,OWNER,GENERALMANAGER,HEADCOACH,DLEAGUEAFFILIATION'
        .split(',')
        .forEach((el) => {
          thead = thead + `<th style="padding: 20px;">${el}</th>`;
        });

      if (team[5].toLowerCase() === this.nbaTeam.toLowerCase()) {
        let teamDetails: string = '';
        team.forEach((el) => {
          teamDetails = teamDetails + `<td style="padding: 20px;">${el}</td>`;
        });

        return `<h2 style="color: #228be6">${this.nbaTeam.toUpperCase()}</h2>
        <table border='1' style="border-collapse: collapse; padding: 20px;">
        <thead >
            ${thead}
        </thead>
        <tbody>
            ${teamDetails}
        </tbody>
        </table>`;
      }
    }
  }
}
