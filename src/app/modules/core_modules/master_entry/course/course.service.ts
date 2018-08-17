import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConstantService } from '../../../../constant.service';
import { HttpStatusService } from '../../../../http-status.service';

@Injectable()
export class CourseService {

  constructor(private httpStatus: HttpStatusService, private http: Http, private constantService: ConstantService) { }

  fetchCourseDetails() {
    return this.http.get(this.constantService._base_url + 'batch/1/Course', { withCredentials:true})
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  fetchCourseDetail(id) {
    return this.http.get(this.constantService._base_url + 'batch/' + id + '/Course', { withCredentials:true})
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  getCourseDetails(id) {
    return this.http.get(this.constantService._base_url + 'course/' + id, { withCredentials:true})
    .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  submitCourse(course, batchID) {
    // tslint:disable-next-line:prefer-const
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.constantService._base_url + 'batch/' + batchID + '/Course', JSON.stringify(course), { headers: headers, withCredentials:true })
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  updateCourse(course, id) {
    // tslint:disable-next-line:prefer-const
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.constantService._base_url + 'course/' + id, JSON.stringify(course), { headers: headers, withCredentials:true })
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  deleteCourse(id) {
    return this.http.delete(this.constantService._base_url + 'course/' + id, { withCredentials:true})
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

}
