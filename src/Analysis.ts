import { Analyzer } from './TeamDetails';
import { TeamData } from './TeamData';

export class TeamAnalysis implements Analyzer {
  constructor(public team: string) {}
  run(teams: TeamData[]): string | undefined {
    for (let team of teams) {
      // console.log(match[5]);
      let thead: string = '';

      'LEAGUE_ID,TEAM_ID,MIN_YEAR,MAX_YEAR,ABBREVIATION,NICKNAME,YEARFOUNDED,CITY,ARENA,ARENACAPACITY,OWNER,GENERALMANAGER,HEADCOACH,DLEAGUEAFFILIATION'
        .split(',')
        .forEach((el) => {
          thead = thead + `<th style="padding: 20px;">${el}</th>`;
        });

      const teamName = 'warriors';

      if (team[5].toLowerCase() === teamName.toLowerCase()) {
        let teamDetails: string = '';
        team.forEach((el) => {
          teamDetails = teamDetails + `<td style="padding: 20px;">${el}</td>`;
        });

        return `<table border='1' style="border-collapse: collapse; padding: 20px;">
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
