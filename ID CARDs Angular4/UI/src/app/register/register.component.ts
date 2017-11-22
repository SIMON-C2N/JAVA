import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
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
      public address:string,
      public role:string) { 
     }
}
export class Roles{
  roleName:string;
}
const role:Roles[]=[
{roleName:"User"},
{roleName:"Deliver"}
];


@Component( {
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],

} )

export class RegisterComponent implements OnInit {
  //component properties
  allusers: User[];
  checkuser=''
  submitted='false';
  statusCode: number;
  username='';
  rounds=2;
  roles=role;
  requestProcessing = false; 
  profileIdToUpdate = null;
  processValidation = false;
  //create form group 
  regForm = new FormGroup({
    username: new FormControl('',  Validators.compose([
      Validators.required
    ])),
    email:new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    ])),
    password:new FormControl('', Validators.required),
    cpassword:new FormControl('', Validators.required),
    mobilenumber:new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^[789]\d{9}$/),
      Validators.pattern(/\d*\.?\d+/)
    ])),
    address:new FormControl('', Validators.compose([
      Validators.required
    ])),
    role:new FormControl('', Validators.required),
  });
  
  constructor(private router: Router,private registerService: RegisterService, private loginservice: LoginService) { }
    
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
        let role = this.regForm.get('role').value;
        let user = new User(username,email,password,cpassword,mobilenumber,address,role);
        //console.log(username,email,password,cpassword,mobilenumber,address);
        console.log(user);
        this.registerService.registerUser(user) 
        .subscribe(successCode=>{
          this.statusCode=successCode
          if(this.statusCode==201)
          {
            this.router.navigate (['login']); 
            this.loginservice.setstatus(this.statusCode);
          }
        },
        errorCode => this.statusCode = errorCode
      );//subscribe
     
    }//method
     //Perform preliminary processing configurations
   preProcessConfigurations() {
    this.statusCode = null;
  this.requestProcessing = true;   
 }

 checkUser(){
   console.log(this.checkuser);
   console.log("coming to checkuser");
   this.loginservice.getAllUserDetails().subscribe(
    users=>{
      this.allusers=users;
      console.log(this.allusers);
    }
  );
 }
}

  


