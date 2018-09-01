import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import { ConstantService } from './constant.service';
import { HttpStatusService } from './http-status.service';

@Injectable()
export class MyHttpClientInterceptor implements HttpInterceptor {
    constructor(private httpStatus: HttpStatusService,  public constantService: ConstantService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const authReq = req.clone({ headers: req.headers
                                    .set("AccessToken", this.constantService.getCookie("AccessToken"))
                                    .set("UserId", this.constantService.getCookie("UserID")) });

        console.log("Sending request with new header now ...");

        //send the newly created request
        return next.handle(authReq)
            .catch((error, caught) => {
                //intercept the respons error and displace it to the console
                console.log("Error Occurred");
                console.log(error);
                //return the error to the method that called it
                return Observable.throw(error);
            }) as any;
    }
}
