import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConstantService } from '../../../../constant.service';
import { HttpStatusService } from '../../../../http-status.service';

@Injectable()
export class BatchService {

  constructor(private httpStatus: HttpStatusService, private http: Http, private constantService: ConstantService) { }

  // Fetching the Batch details
  fetchBatchDetails() {
    return this.http.get(this.constantService._base_url + 'term/1/batch')
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  // For Submiting thr Batch Details
  submitBatch(batch, TermID) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.constantService._base_url + 'term/' + TermID + '/batch', JSON.stringify(batch), { headers: headers})
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  // For updating the Batch
  updateBatch(batch, id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.constantService._base_url + 'batch/' + id, JSON.stringify(batch), { headers: headers})
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  // For Deleting the Batch
  deleteBatch(id) {
    return this.http.delete(this.constantService._base_url + 'batch/' + id)
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  // for getting the separate batch
  getBatch(id) {
    return this.http.get(this.constantService._base_url + 'batch/' + id)
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

}
