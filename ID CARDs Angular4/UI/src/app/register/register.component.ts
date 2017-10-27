import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RegisterService } from '../register.service';

export interface UserResponse{
  login: string;
  bio: string;
  company: string;
  id: number;
}

export class User{
  constructor(
      public username: string, 
      public email: string,
      public password: string,
      public cpassword: string,
      public mobilenumber: string,
      public address:string) { 
     }
}

@Component( {
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],

} )
export class RegisterComponent implements OnInit {
  //component properties
  submitted='false';
  allProfiles: User[];
  statusCode: number;
  username='';
  requestProcessing = false; 
  profileIdToUpdate = null;
  processValidation = false;
  //create form group
  regForm = new FormGroup({
    username: new FormControl('',  Validators.required),
    email:new FormControl('', Validators.required),
    password:new FormControl('', Validators.required),
    cpassword:new FormControl('', Validators.required),
    mobilenumber:new FormControl('', Validators.required),
    address:new FormControl('', Validators.required)
  });
  
  constructor(private registerService: RegisterService) { }
    
      ngOnInit():void {
/*        this.http.get<UserResponse>('https://api.github.com/users/seeschweiler').subscribe(
          data=>{
          //console.log(data);
          console.log("UserLogin:" +data.login);
          console.log("bio:" +data.bio);
          console.log("id" +data.id);
        },
        (err: HttpErrorResponse) =>{
          if(err.error instanceof Error){
            console.log("Client side Error occured");            
          }
          else{
            console.log("Server side Error occured");
          }
        }      
      )*/
      }

      onRegFormSubmit(): void{
        console.log("coming");
        let username = this.regForm.get('username').value;
        let email = this.regForm.get('email').value;
        let password = this.regForm.get('password').value;
        let cpassword = this.regForm.get('cpassword').value;	  
        let mobilenumber = this.regForm.get('mobilenumber').value;
        let address = this.regForm.get('address').value;
        let user = new User(username,email,password,cpassword,mobilenumber,address);
        //console.log(username,email,password,cpassword,mobilenumber,address);
        console.log(user);
        this.registerService.registerUser(user) 
        .subscribe(successCode=>{
          this.statusCode=successCode
        },
        errorCode => this.statusCode = errorCode
      );//subscribe
      }//method
     //Perform preliminary processing configurations
   preProcessConfigurations() {
    this.statusCode = null;
  this.requestProcessing = true;   
 }


}

  


