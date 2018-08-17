import { Injectable } from '@angular/core';

@Injectable()
export class DateService {

  constructor() { }

  dateConversion(DateString, inputDateStringFormat, outputDateStringFormat) {

    if (inputDateStringFormat === 'dd-mm-yyyy' && outputDateStringFormat === 'yyyy-mm-dd') {
      let date = DateString.split('-');

      if (date[2].length === 1) {
        date[2] = '0' + date[2];
      }

      if (date[1].length === 1) {
        date[1] = '0' + date[1];
      }

      if (date[0].length === 1) {
        date[0] = '0' + date[0];
      }

      date = date[2] + '-' + date[1] + '-' + date[0];

      return date;
    }

    if (inputDateStringFormat === 'dd/mm/yyyy' && outputDateStringFormat === 'yyyy/mm/dd') {
      let date = DateString.split('/');

      if (date[2].length === 1) {
        date[2] = '0' + date[2];
      }

      if (date[1].length === 1) {
        date[1] = '0' + date[1];
      }

      if (date[0].length === 1) {
        date[0] = '0' + date[0];
      }

      date = date[2] + '/' + date[1] + '/' + date[0];

      return date;
    }

    if (inputDateStringFormat === 'dd-mm-yyyy' && outputDateStringFormat === 'yyyy/mm/dd') {
      let date = DateString.split('-');

      if (date[2].length === 1) {
        date[2] = '0' + date[2];
      }

      if (date[1].length === 1) {
        date[1] = '0' + date[1];
      }

      if (date[0].length === 1) {
        date[0] = '0' + date[0];
      }

      date = date[2] + '/' + date[1] + '/' + date[0];

      return date;
    }

    if (inputDateStringFormat === 'dd/mm/yyyy' && outputDateStringFormat === 'yyyy-mm-dd') {
      let date = DateString.split('/');

      if (date[2].length === 1) {
        date[2] = '0' + date[2];
      }

      if (date[1].length === 1) {
        date[1] = '0' + date[1];
      }

      if (date[0].length === 1) {
        date[0] = '0' + date[0];
      }

      date = date[2] + '-' + date[1] + '-' + date[0];

      return date;
    }

    // -------------------------------------------------------------------------------------------------------------

    if (inputDateStringFormat === 'yyyy-mm-dd' && outputDateStringFormat === 'dd-mm-yyyy') {
      let date = DateString.split('-');

      if (date[2].length === 1) {
        date[2] = '0' + date[2];
      }

      if (date[1].length === 1) {
        date[1] = '0' + date[1];
      }

      if (date[0].length === 1) {
        date[0] = '0' + date[0];
      }

      date = date[2] + '-' + date[1] + '-' + date[0];

      return date;
    }

    if (inputDateStringFormat === 'yyyy/mm/dd' && outputDateStringFormat === 'dd-mm-yyyy') {
      let date = DateString.split('/');

      if (date[2].length === 1) {
        date[2] = '0' + date[2];
      }

      if (date[1].length === 1) {
        date[1] = '0' + date[1];
      }

      if (date[0].length === 1) {
        date[0] = '0' + date[0];
      }

      date = date[2] + '-' + date[1] + '-' + date[0];

      return date;
    }

    if (inputDateStringFormat === 'yyyy/mm/dd' && outputDateStringFormat === 'dd/mm/yyyy') {
      let date = DateString.split('/');

      if (date[2].length === 1) {
        date[2] = '0' + date[2];
      }

      if (date[1].length === 1) {
        date[1] = '0' + date[1];
      }

      if (date[0].length === 1) {
        date[0] = '0' + date[0];
      }

      date = date[2] + '/' + date[1] + '/' + date[0];

      return date;
    }

    if (inputDateStringFormat === 'yyyy-mm-dd' && outputDateStringFormat === 'dd/mm/yyyy') {
      let date = DateString.split('-');

      if (date[2].length === 1) {
        date[2] = '0' + date[2];
      }

      if (date[1].length === 1) {
        date[1] = '0' + date[1];
      }

      if (date[0].length === 1) {
        date[0] = '0' + date[0];
      }

      date = date[2] + '/' + date[1] + '/' + date[0];

      return date;
    }

  }

}
