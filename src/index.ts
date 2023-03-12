import { TeamsReader } from './TeamsReader';
import { Summary } from './TeamDetails.js';

const teamsReader = TeamsReader.fromCsv('nbateams.csv');

teamsReader.load();
const summary = Summary.TeamDetailsWithHtmlReport('warriors');

summary.buildAndPrintReport(teamsReader.teamDetails);
