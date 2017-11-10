import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User } from './register/register.component';
import { Observable } from 'rxjs';
import {environment } from '../environments/environment';
import {UserForUpdate} from './user/user.component';

@Injectable()
export class UserService {
  private username;

  constructor(private http: Http) {}

  updateUser(updatedUserDtls:  UserForUpdate):Observable<number> {
    let userHeaders = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: userHeaders });
      return this.http.put(environment._updateURL, updatedUserDtls, options)
             .map(success => success.status)
             .catch(this.handleError);
  }

   private handleError (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.status); 
    }

}
