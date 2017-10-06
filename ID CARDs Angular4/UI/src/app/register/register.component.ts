import { Component , OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { RegisterService } from '../register.service'; 
import { Register } from './register.component';

@Component( {
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],

} )
export class RegisterComponent implements OnInit {
  //component properties
  allProfiles:Register[];
  statusCode: number;
  requestProcessing =false;
  profileIdToUpdate = null;
  processValidation = false;
    
 
    constructor(private service: RegisterService) { }
    
      ngOnInit():void {
        this.getAllProfiles();
      
        }

onRegisterFormSubmit(){
  
}




        getAllProfiles(){
          this.service.getAllProfiles().subscribe(data => this.allProfiles =data,
          
          errorCode =>this.statusCode =errorCode);
        }

        preProcessConfigurations() {
          this.statusCode = null;
        this.requestProcessing = true;   
       }
      }

  


export interface Register {
    userName:  string;
  email: string;
  password: string;
cpassword:string;
  mobile: string;
  address: string;
  
  }