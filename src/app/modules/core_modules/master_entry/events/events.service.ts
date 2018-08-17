import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConstantService } from '../../../../constant.service';
import { HttpStatusService } from '../../../../http-status.service';
0
@Injectable()
export class EventsService {

  constructor(private httpStatus: HttpStatusService,private http: Http, private constantService: ConstantService) { }

  // For Fetching the All the Events from the Instuitute
  fetchEvents() {
    return this.http.get(this.constantService._base_url + 'institute/1/event', { withCredentials:true})
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  // For Submitting the new Events
  submitEvents(events) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.constantService._base_url + 'institute/1/event', JSON.stringify(events), { headers: headers, withCredentials:true })
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  // For Getting the Single and Separate Event
  getEvent(id) {
    return this.http.get(this.constantService._base_url + 'Event/'+id, { withCredentials:true})
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  // For Deleting the Events
  deleteEvent(id) {
    return this.http.delete(this.constantService._base_url + 'Event/'+id, { withCredentials:true})
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }
}
