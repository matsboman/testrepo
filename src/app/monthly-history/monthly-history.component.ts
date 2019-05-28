import { Component } from '@angular/core';
import { MonthlyService } from '../service/monthly.service';
import { MonthlyHistory } from '../model/monthly-model';
import * as c3 from 'c3';

@Component({
  selector: 'app-monthly-history',
  templateUrl: './monthly-history.component.html',
  styleUrls: ['./monthly-history.component.css']
})
export class MonthlyHistoryComponent {
  title = 'Monthly History';

  constructor(private monthlyService: MonthlyService) {
  }

  monthlyList: MonthlyHistory[] = [];

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

  displayChart(currency: string, bindToChart: string) {
    let columnValues = [];
    let values: (string | number)[] = [currency];
    let labels: (string | number)[] = ['date'];
    let index = 0;
    this.monthlyList.forEach(month => {
      labels.push((new Date(this.formatDateString(month.date)).getTime()));
      if (currency == 'USD') {
        values.push(month.usd);
      } else {
        values.push(month.sek);
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
    this.monthlyService.getMonthlyHistory().subscribe(monthlyHistory => {
      this.monthlyList = JSON.parse(JSON.stringify(monthlyHistory));
      this.displayChart('USD', '#chartUSD');
      this.displayChart('SEK', '#chartSEK');
    });
  }

  ngAfterViewInit() {
  }
}
