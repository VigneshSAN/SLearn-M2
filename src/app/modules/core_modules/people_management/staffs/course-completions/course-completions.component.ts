import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-course-completions',
  templateUrl: './course-completions.component.html',
  styleUrls: ['./course-completions.component.scss']
})
export class CourseCompletionsComponent implements OnInit {

  coursegraph: any;

  constructor() {
    this.coursechart();
   }

  ngOnInit() {
  }

  public coursechart() {
    this.coursegraph = new Chart({
      chart: {
        type: 'bar'
    },
    title: {
        text: 'Courses'
    },
    xAxis: {
        categories: ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5']
    },
    yAxis: {
        min: 0,
        title: {
            text: ' '
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Portion 3',
        data: [30, 40, 40, 20, 50]
    },  {
      name: 'Portion 2',
      data: [20, 20, 30, 20, 10]
  }, {
      name: 'Portion 1',
      data: [50, 30, 40, 40, 20]
  }]
    });
  }

}
