import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iddetails } from './idcardselection/idcardselection.component';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {environment } from '../environments/environment';

@Injectable()
export class IdsubmitService {

  userUrl = "http://localhost:8080/user/idcardsubmit";
  constructor(private http: Http) { }
  registerUser(user: iddetails):Observable<number> {
    let userHeaders = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: userHeaders });
      return this.http.post(environment._idcardsubmitUrl, user, options)
             .map(success => success.status).catch(this.handleError);
  }
  private handleError (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.status); 
    }
}
