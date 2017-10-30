import { Component, OnInit , Directive, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../register/register.component';
import { LoginService } from '../login.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  allusers: User[];
  statusCode: number;
  userflag: any;
  username: any;
  password: any;
  role: any;
  i: any;
  j: any;
  token: any;
 
   onSubmit( data: any ) {
    console.log( data );
}

  constructor( private router: Router ,private user: UserService, private loginservice: LoginService ) { }
  ngOnInit() {
  } 

//after submiting login form control comes here
loginUser(e){ 

console.log("coming to loginuser");
var  role=e.target.elements[0].value;
var username=e.target.elements[1].value;
var password=e.target.elements[2].value;
this.username=username;
this.password=password;
this.role=role;

 this.userValidator();
 this.getAllUsers();
}

private _username = new BehaviorSubject(this.username);
currentUser = this._username.asObservable();

getAllUsers() { 
  this.loginservice.getAllUserDetails().subscribe(
    users =>{
      this.allusers = users;
      //for loop to ge the current user
      for(this.i=0; this.i<users.length;this.i++)
      {
        this.token=true;
        for(this.j=0; this.j<users.length;this.j++)
        {
          this.token=true;
          if(this.username==users[this.j].username)
          {
            this.username=users[this.j].username;
            this.token=false;
          }
          if(this.token==false)
          break;
        }
        if(this.token==false)
        break;
      }
      console.log(this.username);
      this.loginservice.setWelcomeUserName(this.username);
    },
    errorCode => this.statusCode = errorCode
  );  
}

userValidator(){

  console.log("coming to uservalidator");
  this.loginservice.validateLogin(this.username, this.password).subscribe(
    status=>{
      this.statusCode=status;
      if(status==200 && this.role=='user')
      {
       this.router.navigate (['user']);
      }
      else
      this.router.navigate (['login']);
    },
    errorCode => this.statusCode = errorCode
  );
}


}