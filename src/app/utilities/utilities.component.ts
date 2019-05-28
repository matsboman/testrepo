import { Component } from '@angular/core';
import { UtilitiesService } from '../service/utilities.service';
import { Utilities } from '../model/utilities-model';
import * as c3 from 'c3';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.css']
})
export class UtilitiesComponent {
  title = 'Utilities';

  constructor(private utilitiesService: UtilitiesService) {
  }

  utilitiesList: Utilities[] = [];

  formatDateString(usDate: string) {
    let components = usDate.split("/", 3);
    let month: string;
    let day: string;
    let year: string;
    if (components[0].length < 2) {
      month = '0' + components[0];
    } else {
      month = components[0];
    }
    if (components[2].length < 4) {
      year = '20' + components[2];
    } else {
      year = components[2];
    }
    day = components[1];
    let formatted = year + '-' + month + '-' + day;
    return formatted;
  }

  displayChart() {
    let columnValues = [];
    this.utilitiesList.forEach(month => {
      columnValues.push([month.item, month.amount]);
    });

    let chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: columnValues,
        type: 'pie'
        // onclick: function (d, i) { console.log("onclick", d, i); },
        // onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        // onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      tooltip: {
        contents: function (d) {
          // console.log("tooltip: ", d);
          return "<font color='blue'>" + d[0].name + "</font>"  +
          "<br>" +
          "<font color='blue'>" + d[0].value + "</font>";
        }
      }
    });
  }

  ngOnInit() {
    this.utilitiesService.getUtilities().subscribe(Utilities => {
      this.utilitiesList = JSON.parse(JSON.stringify(Utilities));
      this.displayChart();
    });
  }

  ngAfterViewInit() {
  }
}
