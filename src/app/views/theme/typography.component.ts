import { Component } from '@angular/core';
import { DragulaService} from 'ng2-dragula';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  templateUrl: 'typography.component.html'
})
export class TypographyComponent {

 // number: any = [];

    constructor(private router: Router, private dragulaService: DragulaService) {
  }
  transferData: Array<any> = ['Language 1', 'Language 2', 'Maths', 'Science', 'Social Science'];
  receivedData: Array<any> = [];

  timetable: Array<any> = [];

  // transferDataSuccess($event: any) {

  //     this.receivedData.push($event.dragData);
  //     console.log(this.receivedData);
  // }

  // restrictedDrop1: any = null;
  // restrictedDrop2: any = null;

  savetimetable($event: any) {
    this.timetable.push($event.dragData);
    console.log(this.timetable);
  }
}
