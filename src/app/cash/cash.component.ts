import { Component } from '@angular/core';
import { CashService } from '../service/cash.service';
import { Cash } from '../model/cash-model';
import * as c3 from 'c3';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})
export class CashComponent {
  title = 'Cash Projection';

  constructor(private CashService: CashService) {
  }

  cashList: Cash[] = [];

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
    let values: (string | number)[] = ['USD'];
    let labels: (string | number)[] = ['date'];
    let index = 0;
    this.cashList.forEach(month => {
      labels.push((new Date(this.formatDateString(month.date)).getTime()));
      values.push(month.usd);      
    });

    columnValues.push(labels);
    columnValues.push(values);

    let chart = c3.generate({
      bindto: '#chart',
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
    this.CashService.getCash().subscribe(Cash => {
      this.cashList = JSON.parse(JSON.stringify(Cash));
      this.displayChart();
    });
  }

  ngAfterViewInit() {
  }
}
