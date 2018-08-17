import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConstantService } from '../../../../constant.service';
import { HttpStatusService } from '../../../../http-status.service';

@Injectable()
export class StudentsService {

  constructor(private httpStatus: HttpStatusService, private constantService: ConstantService, private http: Http) { }

  // For Fetching the students details
  fetchStudentsDetails() {
    return this.http.get(this.constantService._base_url + 'batch/1/Student', { withCredentials:true})
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  fetchStudentsDetail(id) {
    return this.http.get(this.constantService._base_url + 'batch/' + id + '/Student', { withCredentials:true})
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  // Submiting the students details
  submitStudents(students, guardians, id) {
    const array: any = {
      'userInfo': students,
      'guardians': guardians
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.constantService._base_url + 'batch/' + id + '/Student', JSON.stringify(array), { headers: headers , withCredentials:true })
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  // fetching the single student details
  fetchStudent(id) {
    return this.http.get(this.constantService._base_url + 'Student/' + id, { withCredentials:true})
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  // updating the Students Details
  updateStudents(students, guardians, id) {
    const array: any = {
      'userInfo': students,
      'guardians': guardians
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.constantService._base_url + 'Student/' + id, JSON.stringify(array), { headers: headers, withCredentials:true })
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  deleteStudents(id) {
    return this.http.delete(this.constantService._base_url + 'Student/' + id, { withCredentials:true})
    .map((response: Response) => {
      return this.httpStatus.successStatus(response)
    }).catch((error: any) => {
      console.log(error);
      return this.httpStatus.errorStatus(error)
    });
  }

  // for post the Leave Request.
  submitLeaveRequest(array) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.constantService._base_url + 'Student/2/LeaveRequest', JSON.stringify(array), { headers: headers , withCredentials:true})
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        return this.httpStatus.errorStatus(error)
      });
  }


  /**** HARI CODE  ****/

  // FOR FETCHING ATTENDANCE

   fetchStudentsAttendance() {
    return this.http.get(this.constantService._base_url + 'Student/1/AttendanceSummary', { withCredentials:true})
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }


  // STUDENTS LEAVE REQUEST
  LeaveRequest() {
    return this.http.get(this.constantService._base_url + 'Student/2/LeaveRequest', { withCredentials:true})
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

  // STUDENTS EVENTS
  StudentEvents() {  // /institute/{instituteId}/event
    return this.http.get(this.constantService._base_url + 'institute/1/event', { withCredentials:true})
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }

 // STUDENTS ASSESSMENTS
  StudentAssessment() {
    return this.http.get(this.constantService._base_url + 'Student/2/AssessmentByCourse/6', { withCredentials:true})
      .map((response: Response) => {
        return this.httpStatus.successStatus(response)
      }).catch((error: any) => {
        console.log(error);
        return this.httpStatus.errorStatus(error)
      });
  }


}
