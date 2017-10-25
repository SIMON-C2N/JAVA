import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { User } from './register/register.component';
import {environment } from '../environments/environment';

@Injectable()
export class LoginService {

  userUrl = "http://localhost:8080/user/profile";
  constructor(private http: Http) { }
  checkUser():Observable<number> {
    let userHeaders = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: userHeaders });
     return null;
  }
  getAllUserDetails():Observable<User[]>{
    return this.http.get(environment.ENDPOINT_URL)
    .map((response: Response)=>response.json())
     .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
      return body;
  }
  private handleError (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.status);
    }
}
