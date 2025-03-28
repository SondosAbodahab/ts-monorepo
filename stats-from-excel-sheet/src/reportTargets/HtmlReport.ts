import { OutputTarget } from "../Summery";
import fs from 'fs';

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
        <div>
            <h1>Analysis output</h1>
            <div>${report}</div>
        </div>
        `;
        fs.writeFileSync('report.html', html)
  }
}
