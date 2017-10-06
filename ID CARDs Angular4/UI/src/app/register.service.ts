import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';




import { Register } from './register/register.component';


import { environment } from '../environments/environment';


@Injectable()


export class RegisterService {
//URLs for CRUD operations
allProfilesUrl = "http://localhost:8080/user/all-profiles";
profileUrl = "http://localhost:8080/user/profile";
//Create constructor to get Http instance
  constructor(private http: Http) { }
  //Fetch all articles
  getAllProfiles(): Observable<Register[]> {
    return this.http.get(this.allProfilesUrl)
       .map(this.extractData)
        .catch(this.handleError);

}
//Create article
createProfile(profile: Register):Observable<number> {
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(this.profileUrl, profile, options)
           .map(success => success.status)
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