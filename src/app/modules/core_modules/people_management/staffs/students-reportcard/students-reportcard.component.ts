import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
// import Highcharts = require('highcharts');

@Component({
  selector: 'app-students-reportcard',
  templateUrl: './students-reportcard.component.html',
  styleUrls: ['./students-reportcard.component.scss']
})
export class StudentsReportcardComponent implements OnInit {

  attendance: any;

  constructor() {
    this.stuDetpercen();
  }

  stuDetpercen() {
    this.attendance = new Chart({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        height: 70,
        width: 70
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: false
        }
    },
    credits: {
      enabled: false
    },
    series: [{
        name: 'Brands',
    //    colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Internet Explorer',
            y: 11.84
        }, {
            name: 'Firefox',
            y: 10.85
        }, {
            name: 'Edge',
            y: 4.67
        }, {
            name: 'Safari',
            y: 4.18
        }, {
            name: 'Other',
            y: 7.05
        }]
    }]
    });
  }

  ngOnInit() {
  }

}
