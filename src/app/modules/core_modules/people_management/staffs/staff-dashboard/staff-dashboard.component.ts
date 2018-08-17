import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Chart } from 'angular-highcharts';
import { Observable, Subscription } from 'rxjs/Rx';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { SidebarModule } from 'ng-sidebar';
import { ToastsManager } from 'ng2-toastr';
import { StaffsService } from '../staffs.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-staff-dashboard',
    templateUrl: './staff-dashboard.component.html',
    styleUrls: ['./staff-dashboard.component.scss'],
})
export class StaffDashboardComponent implements OnInit {

    // @ViewChild(Ng2PopupComponent) popup: Ng2PopupComponent;

    constructor(private StaffService: StaffsService, private spinnerService: Ng4LoadingSpinnerService,
        private toastr: ToastsManager,
        vcr: ViewContainerRef, private router: Router) {
          this.toastr.setRootViewContainerRef(vcr);
        }

    ngOnInit() {
        this.chartsData();
        this.staffatten();
        this.staffReg();
        this.staffEvent();
    }

    currentOrientation: any = 'horizontal';
    chart: any;
    exam1: any;
    course: any;

    staffatt: any = [];
    staffreg: any = [];
    staffevn: any = [];


    // FOR MODALS
    public imagePath: string;
    public myModal;
    public largeModal;
    public smallModal;
    public primaryModal;
    public successModal;
    public warningModal;
    public dangerModal;
    public infoModal;

    // FOR CLOCK
    ticks: any = 0;
    minutesDisplay: Number = 0;
    hoursDisplay: Number = 0;
    secondsDisplay: Number = 0;

    sub: Subscription;

    private startTimer() {

        const timer = Observable.timer(1, 1000);
        this.sub = timer.subscribe(
            t => {
                this.ticks = t;
                this.secondsDisplay = this.getSeconds(this.ticks);
                this.minutesDisplay = this.getMinutes(this.ticks);
                this.hoursDisplay = this.getHours(this.ticks);
            }
        );
    }

    private getSeconds(ticks: number) {
        return this.pad(ticks % 60);
    }

    private getMinutes(ticks: number) {
        return this.pad((Math.floor(ticks / 60)) % 60);
    }

    private getHours(ticks: number) {
        return this.pad(Math.floor((ticks / 60) / 60));
    }

    private pad(digit: any) {
        return digit <= 9 ? '0' + digit : digit;
    }

    /**********************************************************************************************/

   /*** Staff Attendance  ***/
    staffatten() {
        this.StaffService.StaffAttendance()
        .subscribe(response => {
            this.staffatt = response;
            // console.log(response);
            this.chart = new Chart({
                chart: {
                    height: 315,
                    width: 300,
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
                        depth: 35,
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}'
                        }
                    }
                },
            series: [{
                type: 'pie',
                name: 'Attendance',
                data: [
                    ['Present', this.staffatt.present],
                    ['Absent', this.staffatt.absent],
                    ['leave', this.staffatt.leave]
                ]
            }]
            })
        }, error => {
          this.toastr.error('Error Occurred!', 'Error!');
        })
    }

    /*** STAFF ASSIGNED REQUEST ***/
    staffReg() {
        this.StaffService.assignedRequest()
        .subscribe(response => {
            this.staffreg = response;
          //  console.log(this.staffreg);
        }, error => {
          this.toastr.error('Error Occurred!', 'Error!');
        })
    }

    /*** STAFF EVENTS ***/
    staffEvent() {
        this.StaffService.staffEvents()
        .subscribe(response => {
            this.staffevn = response;
        }, error => {
          this.toastr.error('Error Occurred!', 'Error!');
        })
    }

    chartsData() {
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
                    depth: 35,
                    dataLabels: {
                        enabled: true,
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

    // ------------------------------------------------------------


}
