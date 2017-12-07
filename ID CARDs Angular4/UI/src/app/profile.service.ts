import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { RequestOptions, Headers, URLSearchParams } from '@angular/http';
import {environment } from '../environments/environment';
import { ObjectIds } from './profile/profile.component';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileService {

  constructor(private http:HttpClient) { }

  sendUsersToServer(ids:Object):Observable<Object>{
    console.log("coming to service");
    let idvalues=ids;
    console.log(idvalues)
    console.log("the stringified value in service"+JSON.stringify(idvalues));
    let userHeaders = new Headers({ 'Content-Type': 'application/json' });
       let options = new RequestOptions({ headers:userHeaders });
    return this.http.post('http://localhost:8080/user/sendids',idvalues);
  }
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

}
