import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.scss']
})
export class StudentAttendanceComponent implements OnInit {

  attendancechart: any

  constructor() {
    this.attendancegraph();
  }

  ngOnInit() {
  }

  attendancegraph() {
    this.attendancechart = new Chart({
      chart: {
        type: 'column'
    },

    title: {
        text: ' '
    },

    xAxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    },
    credits: {
      enabled: false
    },
    yAxis: {
        allowDecimals: false,
        min: 0,
        labels: {
          enabled: false
      },

        // title: {
        //     text: 'Present'
        // }
    },

    // tooltip: {
    //     formatter: function () {
    //         return '<b>' + this.x + '</b><br/>' +
    //             this.series.name + ': ' + this.y + '<br/>' +
    //             'Total: ' + this.point.stackTotal;
    //     }
    // },

    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },

    series: [{
        name: 'Present',
        data: [{y: 1, color: '#008000'}, {y: 1, color: '#008000'}, {y: 1, color: '#008000'}, {y: 1, color: '#008000'}, {y: 1, color: '#FF0000'}],
    }, {
        name: 'Absent',
        data: [{y: 1, color: '#008000'}, {y: 1, color: '#008000'}, {y: 1, color: '#FF0000'}, {y: 1, color: '#008000'}, {y: 1, color: '#FF0000'}],
    }]
    });
  }

}
