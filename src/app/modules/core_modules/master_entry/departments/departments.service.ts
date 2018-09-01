import { Injectable, ViewContainerRef } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConstantService } from '../../../../constant.service';
import { HttpStatusService } from '../../../../http-status.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastsManager } from 'ng2-toastr';

@Injectable()
export class DepartmentsService {

  constructor(private httpStatus: HttpStatusService, private http: Http, private constantService: ConstantService) {

  }

  // fetching the departments details for the Departments List
  fetchDepartmentDetails() {
    return this.http.get(this.constantService._base_url + 'institute/1/departments')
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        return this.httpStatus.errorStatus(error)
      });
  }

  fetchDepartmentDetail(id) {
    return this.http.get(this.constantService._base_url + 'institute/' + id + '/departments')
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        return this.httpStatus.errorStatus(error)
      });
  }

  // submiting the department details
  submitDepartmentDetails(department) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.constantService._base_url + 'institute/1/department', JSON.stringify(department), { headers: headers})
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  // For Getting the Separate Departments Details 
  getDepartmentDetails(id) {
    return this.http.get(this.constantService._base_url + 'department/' + id)
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  // For updating the department details
  updateDepartment(department, id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.constantService._base_url + 'department/' + id, JSON.stringify(department), { headers: headers})
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  // For Deleting the Department
  deleteDepartment(id) {
    return this.http.delete(this.constantService._base_url + 'department/' + id)
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

}
