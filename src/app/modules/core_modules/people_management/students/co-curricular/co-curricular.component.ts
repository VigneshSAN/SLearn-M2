import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-co-curricular',
  templateUrl: './co-curricular.component.html',
  styleUrls: ['./co-curricular.component.scss']
})
export class CoCurricularComponent implements OnInit {

  curriculargraph: any;

  constructor() {
    this.curricularchart();
   }

  ngOnInit() {
  }



  curricularchart() {
    this.curriculargraph = new Chart({
      chart: {
        type: 'area'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: ['school journal', 'Dist school journal', 'South school journal', 'North school journal', 'State school journal']
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Cricket',
        data: [5, 3, 4, 7, 2]
      }, {
        name: 'Chess',
        data: [2, 2, 3, 2, 1]
      }, {
        name: 'Hocky',
        data: [3, 4, 4, 2, 5]
      }]
    });
  }
}
