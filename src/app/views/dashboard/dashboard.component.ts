import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** FOR CAROUSEL **/
import { CarouselModule } from 'ngx-bootstrap/carousel';

/** FOR CALANDER  **/
import { ChangeDetectionStrategy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators/map';
import { CalendarEvent, CalendarUtils, CalendarEventTimesChangedEvent } from 'angular-calendar';
import {
    isSameMonth, isSameDay, getMonth, startOfMonth, startOfWeek, startOfDay, endOfMonth, endOfWeek, endOfDay, subWeeks,
    addWeeks
} from 'date-fns';
import { RRule } from 'rrule';
import { GetMonthViewArgs, MonthView, getMonthView } from 'calendar-utils';
import { Chart } from 'angular-highcharts';

import { Subject } from 'rxjs/Subject';
// import { colors } from './demo-utils/colors';

import { ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
// import { Options } from 'fullcalendar';
// import { EventSesrvice } from './demo-utils/event.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';

interface Film {
    id: number;
    title: string;
    release_date: string;
}

/** CALANDER END **/
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'dashboard.component.html',
    animations: [
        trigger('bounce', [transition('* => *', useAnimation(bounce))])
    ],
})
export class DashboardComponent implements OnInit {

    eventService: any;
    id = 'chart';
    width = 200;
    height = 260;
    type = 'pie';
    dataFormat = 'json';
    dataSource: any;
    options: any;
    chart: any;
    add: any;

    name: string;
    //  view: String = 'month';
    viewDate: Date = new Date();
    bounce: any;

    // WORK FLOW
    work_flow = [
        { 'id': '1', 'work_title': 'Sports Day Registration', 'sub_title': 'Lorem ipsum dolor sit amet', 'value': '85', 'img_url': 'sports_day.png' },
        { 'id': '2', 'work_title': 'No-Due Form', 'sub_title': 'Lorem ipsum dolor sit amet', 'value': '60', 'img_url': 'form.png' },
        { 'id': '3', 'work_title': 'Bus Route Change', 'sub_title': 'Lorem ipsum dolor sit amet', 'value': '45', 'img_url': 'school_bus.png' },
        { 'id': '4', 'work_title': 'OD Application', 'sub_title': 'Lorem ipsum dolor sit amet', 'value': '50', 'img_url': 'od.png' },
        { 'id': '5', 'work_title': 'Library Books', 'sub_title': 'Lorem ipsum dolor sit amet', 'value': '60', 'img_url': 'library.png' },
    ]

    tasks = [
        { 'id': '1', 'img_sli': 'cal_icon.png', 'task_title': 'Maths Test', 'task_sub': 'Lorem ipsum dolor' },
        { 'id': '1', 'img_sli': 'cal_icon_7.png', 'task_title': 'Science Test', 'task_sub': 'Lorem ipsum dolor' },
        { 'id': '1', 'img_sli': 'cal_icon_2.png', 'task_title': 'Language Test', 'task_sub': 'Lorem ipsum dolor' },
        { 'id': '1', 'img_sli': 'cal_icon_3.png', 'task_title': 'S.Science Test', 'task_sub': 'Lorem ipsum dolor' },
        { 'id': '1', 'img_sli': 'cal_icon_4.png', 'task_title': 'Language 2 Test', 'task_sub': 'Lorem ipsum dolor' },
        { 'id': '1', 'img_sli': 'cal_icon_5.png', 'task_title': '2nd Unit Test', 'task_sub': 'Lorem ipsum dolor' },
        { 'id': '1', 'img_sli': 'cal_icon_6.png', 'task_title': '4th Unit Test', 'task_sub': 'Lorem ipsum dolor' },
    ]

    task_slider = [
        { 'id': '1', 'img_sli': '1.png' },
        { 'id': '2', 'img_sli': '2.png' },
        { 'id': '3', 'img_sli': '3.png' },
    ]

    AbsoluteImageUrl;


    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    constructor() {

        this.chart = new Chart({
            chart: {
                height: 300,
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0
                }
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
            series: [{
                type: 'pie',
                name: 'Attendance',
                data: [
                    ['Present', 60],
                    ['Absent', 10],
                    ['Late Present', 25],
                    ['OD', 5]
                ]
            }]
        });

    }



}
