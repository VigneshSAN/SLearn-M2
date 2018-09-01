
// providers.ts
import {RequestOptions, XHRBackend} from '@angular/http';
import {MyHttpInterceptor} from './my-http-interceptor';
import { ConstantService } from './constant.service';
import { CookieService } from '../../node_modules/angular2-cookie/services/cookies.service';


// factory dependency injection
export function providerCustomHttp(backend: XHRBackend, defaultOptions: RequestOptions , cookieService: CookieService ) {
  return new MyHttpInterceptor(backend, defaultOptions ,  cookieService );
}