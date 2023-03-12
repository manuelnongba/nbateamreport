import fs from 'fs';
import type { OutputTarget } from '../TeamDetails';

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `<div style="font-size: 10px;">
    <h1 class='an'>NBA TEAM REPORT</h1>
    ${report}
    </div>`;

    fs.writeFileSync('report.html', html);
  }
}
