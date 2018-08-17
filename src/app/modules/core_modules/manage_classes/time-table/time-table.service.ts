import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConstantService } from '../../../../constant.service';
import { Observable } from 'rxjs/Rx';
import { HttpStatusService } from '../../../../http-status.service';


@Injectable()
export class TimeTableService {

  constructor(private httpStatus: HttpStatusService, public http: Http, public constantService: ConstantService) {

  }

  // For generating the TT as per the User Constraints
  submitTTConstraints(batchIds, constraints) {
    const array: any = {
      'batchIds': batchIds,
      'constraints': constraints
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.constantService._base_url + 'TTGenerator/1', JSON.stringify(array), { headers: headers })
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        return this.httpStatus.errorStatus(error)
      });
  }

  // For resetting the TT
  resetTT(batchIds, constraints) {
    const array: any = {
      'batchIds': batchIds,
      'constraints': constraints
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.constantService._base_url + 'TTGenerator/1/reset', JSON.stringify(array), { headers: headers })
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        return this.httpStatus.errorStatus(error)
      });
  }

  resetSingleTT(batchID) {
    const array: any = {
      "batchIds": [
        batchID
      ],
      "constraints": [
        {
          "priority": "Hard",
          "name": "ScheduleConflict"
        }
      ]
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.constantService._base_url + 'TTGenerator/1/reset', JSON.stringify(array), { headers: headers })
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        return this.httpStatus.errorStatus(error)
      });
  }

  fetchTT(batchID) {
    return this.http.get(this.constantService._base_url + 'batch/'+ batchID +'/schedule')
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        return this.httpStatus.errorStatus(error)
      });
  }

}
