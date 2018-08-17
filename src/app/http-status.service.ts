import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpStatusService {

  constructor() { }

  // Capturing the Status of the response
  // Success Status
  successStatus(response) {
    if (response) {
      if (response.status === 201) {
        return response.json();
      } else if (response.status === 200) {
        return response.json();
      } else {
        return response.json();
      }
    }
  }

  // Error Status
  errorStatus(error) {
    console.log(error);
    if (error.status === 500) {
      return Observable.throw(new Error(error.status));
    } else if (error.status === 400) {
      return Observable.throw(new Error(error.status));
    } else if (error.status === 409) {
      return Observable.throw(new Error(error.status));
    } else if (error.status === 406) {
      return Observable.throw(new Error(error.status));
    }
  }

}
