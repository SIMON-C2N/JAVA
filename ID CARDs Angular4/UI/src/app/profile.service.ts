import { Injectable } from '@angular/core';
import { Emps } from './profile/profile.component';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileService {

  constructor() { }
  
  formArray():Observable<Emps[]>{
    return
  }

}
