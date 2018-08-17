import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
// import Highcharts = require('highcharts');
import { NgProgress } from '@ngx-progressbar/core';
import { AlertConfig } from 'ngx-bootstrap/alert';

export function getAlertConfig(): AlertConfig {
    return Object.assign(new AlertConfig(), { type: 'success' });
  }


@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.scss'],
  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})



export class AcademicComponent implements OnInit {

  performancegraph: any;
  reportchart: any;


  public progress: NgProgress

  public max: Number = 200;
  public currentValue: Number;
  public type: String;

  public stackedValues: any[] = [];

  constructor() {
    this.performancechart();
    this.generateNewProgressValues();
    this.generateStackedValues();

  }

  private generateNewProgressValues() {
    const value = Math.floor((Math.random() * 100) + 1);
    let type: String;
    if (value < 20) {
    type = 'success';
    } else if (value < 40) {
    type = 'info';
    } else if (value < 60) {
    type = 'warning';
    } else {
    type = 'danger';
    }
    this.currentValue = value;
    this.type = type;
    };

    private generateStackedValues() {
        const types = ['success', 'info', 'warning', 'danger'];
        this.stackedValues = [];
        let total = 0;
        for (let i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
        const index = Math.floor((Math.random() * 4));
        const value = Math.floor((Math.random() * 30) + 1);
        total += value;
        this.stackedValues.push({
        value: value,
        max: value,
        type: types[index]
        });
        }
        };

  performancechart() {

    this.performancegraph = new Chart({
      chart: {
          height: 300,
          type: 'pie',
        //   options3d: {
        //       enabled: true,
        //       alpha: 45,
        //       beta: 0
        //   }
      },
      title: {
          text: ''
      },
      credits: {
          enabled: false,
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              depth: 25,
              dataLabels: {
                  enabled: false,
                  format: '{point.name}'
              }
          }
      },
      series: [
    {
        type: 'column',
        name: '2014',
        data: [46, 62, 81, 53, 64]
    }, {
        type: 'column',
        name: '2015',
        data: [92, 73, 65, 87, 76]
    }, {
        type: 'column',
        name: '2016',
        data: [64, 83, 73, 69, 70]
    }, {
        type: 'spline',
        name: '2017',
        data: [63, 67, 83, 63, 63],

    },
//     {
//         type: 'pie',
//         name: 'Total consumption',
//         data: [{
//             name: '2014',
//             y: 13,
//             color: Highcharts.getOptions().colors[0]
//         }, {
//             name: '2015',
//             y: 23,
//             color: Highcharts.getOptions().colors[1]
//         }, {
//             name: '2016',
//             y: 19,
//             color: Highcharts.getOptions().colors[2]
//         }],
//       center: [ 50, 40],
//         size: 100,
//    //     showInLegend: false,
//         // dataLabels: {
//         //     enabled: false
//         // }
//     }
]
  });

  this.reportchart = new Chart({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: 50,
    },
    title: {
        text: '',
        align: 'center',
        verticalAlign: 'middle',
        y: 40
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: false,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
          //  center: ['50%', '75%']
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '80%',
        data: [
            ['Percentage', 70],
            ['', 30],
        ]
    }]
  });

  }

  ngOnInit() {
  }

  changeProgressColor() {
    this.progress.setConfig({ color: 'green' });
  }

}
