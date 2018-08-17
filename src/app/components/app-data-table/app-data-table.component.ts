import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';
import { StaffsService } from '../../modules/core_modules/people_management/staffs/staffs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-table',
  templateUrl: './app-data-table.component.html',
  styleUrls: ['./app-data-table.component.scss']
})

export class AppDataTableComponent {

  // Data Array of the Data Table, this can be dynamically generates it Own Column name as in the Data Array.
  @Input() data: any = [];

  // For the Selection data Process
  @Input() selection: any = [];

  // Capturing the Title of the Datatable.
  @Input() title: any;

  // Setting column like Edit, Delete, View Icons in the Column
  @Input() settings: Boolean = false;

  @Input() deleteOption: Boolean = false;
  @Input() updateOption: Boolean = false;
  @Input() viewOption: Boolean = false;
  @Input() selectOption: Boolean = false;
  
  // Add Option Button
  @Input() addOption: Boolean = true;

  // Capturing the Router Link for the Add Button
  @Input() addRouterLink: any;

  @Output() UpdateOutputID = new EventEmitter<any>();
  @Output() DeleteOutputID = new EventEmitter<any>();
  @Output() ViewOutputID = new EventEmitter<any>();
  @Output() SelectOutputID = new EventEmitter<any>();

  page = 1;

  items = 5;

  columns: string[] = [];

  filterColumns = [];

  event = { 'target': { 'checked': true } };

  nonEvent = { 'target': { 'checked': false } };

  constructor(private router: Router, private staffsService: StaffsService) { }

  ngOnInit( ) {

    console.log(this.selection);

    this.columns = Object.keys(this.data[0]);

    if (this.columns.length < 8) {
      for (let i = 0; i < this.columns.length; i++) {
        this.filterColumn((this.columns[i]), this.event);
      }
    } else {
      for (let i = 0; i < 7; i++) {
        this.filterColumn((this.columns[i]), this.event);
      }
    }
  }

  // Filtering Columns
  filterColumn(value, event) {
    if (event.target.checked) {
      this.filterColumns.push(value);
    } else if (!event.target.checked) {
      const index = this.filterColumns.indexOf(value);
      this.filterColumns.splice(index, 1);
    }
  }

  // for update the data
  update(id) {
    this.UpdateOutputID.emit(id);
  }

  // for delete the data
  delete(id) {
    this.DeleteOutputID.emit(id);
  }

  // for View the Data
  view(id) {
    this.ViewOutputID.emit(id);
  }

  select(id) {
    console.log(id);
    this.SelectOutputID.emit(id);
  }

  routerLink() {
    this.router.navigate([this.addRouterLink]);
  }

}
