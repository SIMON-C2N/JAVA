import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './register/register.component';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {environment } from '../environments/environment';

@Injectable()
export class RegisterService {

  userUrl = "http://localhost:8080/user/profile";
  constructor(private http: Http) { }
  registerUser(user:  User):Observable<number> {
    let userHeaders = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: userHeaders });
      return this.http.post(environment._registerUrl, user, options)
             .map(success => success.status).catch(this.handleError);
  }
  private handleError (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.status); 
    }
}
