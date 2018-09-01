import {ConnectionBackend, Headers, Http, RequestOptions, RequestOptionsArgs, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/empty';
import {Injectable} from '@angular/core';
import { CookieService } from '../../node_modules/angular2-cookie/services/cookies.service';


@Injectable()
export class MyHttpInterceptor extends Http{
    constructor(_backend: ConnectionBackend, _defaultOptions: RequestOptions , public cookieService : CookieService ) {
        super(_backend, _defaultOptions );
      }

      get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        // On every request, we will add the Authorization header
        const enhacedOptions = this.setAuthorizationHeader(options);
        return super.request(url, enhacedOptions);
          
      }

      private setAuthorizationHeader(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (!options) {
          options = new RequestOptions();
        }
        if (!options.headers) {
          options.headers = new Headers();
        }
        // Make a copy of headers on the RequestOptions and append 'Authorization' token
        let _token = this.cookieService.get("AccessToken");
        let _Userid = this.cookieService.get("UserID");
        const headers = {
            AccessToken: _token  ,
            UserId: _Userid
        };
        options.headers = new Headers(headers);
        return options;
      }
      
}

