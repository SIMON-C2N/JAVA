import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import {environment } from '../environments/environment';

@Injectable()
export class IdsubmitService {

  // userUrl = "http://localhost:8080/user/idcardsubmit";
  // constructor(private http: Http) { }
  // registerUser(user: iddetails):Observable<number> {
  //   let userHeaders = new Headers({ 'Content-Type': 'application/json' });
  //     let options = new RequestOptions({ headers: userHeaders });
  //     return this.http.post(environment._idcardsubmitUrl, user, options)
  //            .map(success => success.status).catch(this.handleError);
  // }
  // private handleError (error: Response | any) {
	// 	console.error(error.message || error);
	// 	return Observable.throw(error.status); 
  //   }
  constructor(private http: HttpClient) {}
  
   pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
     let formdata: FormData = new FormData();
  
     formdata.append('file', file);
  
     const req = new HttpRequest('POST', 'http://localhost:8080/user/post', formdata, {
       reportProgress: true,
       responseType: 'text'
     });
  
     return this.http.request(req);
   }
  


}
