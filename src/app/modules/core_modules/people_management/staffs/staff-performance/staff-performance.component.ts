import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-staff-performance',
  templateUrl: './staff-performance.component.html',
  styleUrls: ['./staff-performance.component.scss']
})
export class StaffPerformanceComponent implements OnInit {

  curriculargraph: any;
  constructor() {
    this.curricularchart();
   }

  ngOnInit() {
  }

  curricularchart() {
    this.curriculargraph = new Chart({
      chart: {
        type: 'spline'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Points'
        },
        labels: {
            formatter: function () {
                return this.value + '°';
            }
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Points',

        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
            y: 26.5,
            marker: {
                symbol: 'url(assets/img/staff_dashboard/staff_performance/cup.png)'
            }
        }, 23.3, 18.3, 13.9, 9.6]

    }]
    });
  }

}
