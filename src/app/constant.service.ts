import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { CookieService } from '../../node_modules/angular2-cookie/services/cookies.service';

@Injectable()
export class ConstantService {

   // public _base_url = 'http://52.15.179.93:8080/SLearn/rest/';
   public _base_url = 'http://52.15.179.93:8080/slearn_v0.2/rest/';

  constructor(private http: Http, private _cookieService: CookieService) { }

  getAcademicTermType() {
    return this.http.get(this._base_url + 'Constants/AcademicTermType', { withCredentials:true})
      .map((response: Response) => response.json());
  }

  getAssessmentType() {
    return this.http.get(this._base_url + 'Constants/AssessmentType', { withCredentials:true})
      .map((response: Response) => response.json());
  }

  getAttendenceStatus() {
    return this.http.get(this._base_url + 'Constants/AttendenceStatus', { withCredentials:true})
      .map((response: Response) => response.json());
  }

  getEntityLevel() {
    return this.http.get(this._base_url + 'Constants/EntityLevel', { withCredentials:true})
      .map((response: Response) => response.json());
  }

  getEventCategory() {
    return this.http.get(this._base_url + 'Constants/EventCategory', { withCredentials:true})
      .map((response: Response) => response.json());
  }

  getEventInstanceStatus() {
    return this.http.get(this._base_url + 'Constants/EventInstanceStatus', { withCredentials:true})
      .map((response: Response) => response.json());
  }

  getEventType() {
    return this.http.get(this._base_url + 'Constants/EventType', { withCredentials:true})
      .map((response: Response) => response.json());
  }

  getGuardianType() {
    return this.http.get(this._base_url + 'Constants/GuardianType', { withCredentials:true})
      .map((response: Response) => response.json());
  }

  getLeaveType() {
    return this.http.get(this._base_url + 'Constants/LeaveType', { withCredentials:true})
      .map((response: Response) => response.json());
  }

  getRequestStatus() {
    return this.http.get(this._base_url + 'Constants/RequestStatus', { withCredentials:true})
      .map((response: Response) => response.json());
  }

  getRequestType() {
    return this.http.get(this._base_url + 'Constants/RequestType', { withCredentials:true})
      .map((response: Response) => response.json());
  }

  getTTContraint() {
    return this.http.get(this._base_url + 'Constants/TTConstraint', { withCredentials:true})
      .map((response: Response) => response.json());
  }

  getTTContraintPriority() {
    return this.http.get(this._base_url + 'Constants/TTConstraintPriority', { withCredentials:true})
      .map((response: Response) => response.json());
  }

  getUserStatus() {
    return this.http.get(this._base_url + 'Constants/UserStatus', { withCredentials:true})
      .map((response: Response) => response.json());
  }

  // ****************************************************************

  // For Token and login
  getToken(username, password) {
    let body = {
      "login": username,
      "pwd": password,
      "groupId": 1
    }

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://52.15.179.93:9080/token', JSON.stringify(body), { headers: headers })
      .map((response: Response) => response.json());
  }

  setToken(accessToken, userID) {
    return this.http.get(this._base_url + 'Test/setCookie/' + accessToken + '/' + userID)
      .map((response: Response) => { return response });
  }

  getUserId() {
    console.log("Get USER ID");
    const headers = new Headers();
    return this.http.get(this._base_url + 'User/roles', { withCredentials: true })
      .map((response: Response) => {
        return this.successStatus(response);
      }).catch((error: any) => {
        console.log(error);
        return this.errorStatus(error)
      });
  }

  getCookie(keyName: string) {
    return this._cookieService.get(keyName);
  }

  setCookie(key: string) {
    this._cookieService.put('AccessToken', key);
  }




  /** HARI CODE  **/
  // getLeaveRequest() {
  //   return this.http.get(this._base_url + '')
  //     .map((response: Response) => response.json());
  // }

  getInstituteName() {
    return this.http.get(this._base_url + 'institute/1')
      .map((response: Response) => response.json());
  }


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
