import { Component } from '@angular/core';
import { DailyService } from '../service/daily.service';
import { DailyHistory } from '../model/daily-model';
import * as c3 from 'c3';

@Component({
  selector: 'app-daily-history',
  templateUrl: './daily-history.component.html',
  styleUrls: ['./daily-history.component.css']
})
export class DailyHistoryComponent {
  title = 'Daily History';

  constructor(private dailyService: DailyService) {
  }

  dailyList: DailyHistory[] = [];

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
    day = components[1];
    year = components[2];
    let formatted = year + '-' + month + '-' + day;
    return formatted;
  }

  displayChart(currency: string, bindToChart: string) {
    let columnValues = [];
    let values: (string | number)[] = [currency];
    let labels: (string | number)[] = ['date'];
    let index = 0;
    this.dailyList.forEach(day => {
      index++;
      if (index % 7 == 0) {
        labels.push((new Date(this.formatDateString(day.date)).getTime()));
        if (currency == 'USD') {
          values.push(day.usd);
        } else {
          values.push(day.sek);
        }
      }
    });

    columnValues.push(labels);
    columnValues.push(values);

    let chart = c3.generate({
      bindto: bindToChart,
      data: {
        x: 'date',
        columns: columnValues
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%Y-%m-%d'
          }
        }
      }
    });
  }

  ngOnInit() {
    this.dailyService.getDailyHistory().subscribe(dailyHistory => {
      this.dailyList = JSON.parse(JSON.stringify(dailyHistory));
      this.displayChart('USD', '#chartUSD');
      this.displayChart('SEK', '#chartSEK');
    });
  }

  ngAfterViewInit() {
  }
}
