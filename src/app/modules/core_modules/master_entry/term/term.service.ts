import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConstantService } from '../../../../constant.service';
import { HttpStatusService } from '../../../../http-status.service';

@Injectable()
export class TermService {

  constructor(public httpStatus: HttpStatusService, private http: Http,private constantService: ConstantService) { }

  // For Fetching the TERM Details
  fetchTermDetails() {
    return this.http.get(this.constantService._base_url + 'institute/1/terms', { withCredentials:true})
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  submitTerm(term) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.constantService._base_url + 'institute/1/term', JSON.stringify(term), { headers: headers , withCredentials:true})
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  // For getting the Particular Term
  getTerm(id) {
    return this.http.get(this.constantService._base_url + 'term/'+ id, { withCredentials:true})
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  // For update the Term
  updateTerm(term, id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.constantService._base_url + 'term/'+ id, JSON.stringify(term), { headers: headers , withCredentials:true})
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  // For Deleting the Term
  deleteTerm(id) {
    return this.http.delete(this.constantService._base_url + 'term/'+ id, { withCredentials:true})
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

}
