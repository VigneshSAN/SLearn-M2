import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConstantService } from '../../../../constant.service';
import { Observable } from 'rxjs/Rx';
import { HttpStatusService } from '../../../../http-status.service';

@Injectable()
export class StaffsService {

  constructor(private httpStatus: HttpStatusService, public http: Http, public constantService: ConstantService) {

  }

  // fetching the staffs for the Staffs List
  fetchStaffDetails(id) {
    return this.http.get(this.constantService._base_url + 'department/' + id + '/staff')
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        return this.httpStatus.errorStatus(error)
      });
  }

  // For adding the staff Details
  submitStaffs(staffs, departmentid) {
    const array: any = {
      'userInfo': staffs,
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.constantService._base_url + 'department/' + departmentid + '/staff', JSON.stringify(array), { headers: headers })
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        return this.httpStatus.errorStatus(error)
      });
  }

  // For updating the Staffs
  updateStaffs(staffs, id) {
    const array: any = {
      'userInfo': staffs,
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.constantService._base_url + 'Staff/' + id, JSON.stringify(array), { headers: headers })
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        return this.httpStatus.errorStatus(error)
      });
  }

  // For Deleting the Staffs
  deleteStaffs(id) {
    return this.http.delete(this.constantService._base_url + 'Staff/' + id)
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  // for get the particular staff details
  getStaffs(id) {
    return this.http.get(this.constantService._base_url + 'Staff/' + id)
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        return this.httpStatus.errorStatus(error)
      });
  }

  // for post the Leave Request.
  submitLeaveRequest(array) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.constantService._base_url + 'Staff/1/Requests', JSON.stringify(array), { headers: headers })
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        return this.httpStatus.errorStatus(error)
      });
  }



  /*** HARI CODE ***/

  // STAFF ATTENDANCE
  StaffAttendance() {
    return this.http.get(this.constantService._base_url + 'Staff/1/AttendanceSummary')
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  // STAFF ASSIGNED REQUEST
  assignedRequest() {
    return this.http.get(this.constantService._base_url + 'Staff/1/AssignedRequests')
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  // STAFF EVENTS
  staffEvents() {
    return this.http.get(this.constantService._base_url + 'Staff/1/EventInstance')
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

}
