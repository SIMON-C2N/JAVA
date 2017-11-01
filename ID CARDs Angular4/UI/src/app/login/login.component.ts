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
  constructor( private router: Router ,private user: UserService, private loginservice: LoginService ) { }
  ngOnInit() {
  } 

//after submiting login form control comes here
loginUser(e){ 

console.log("coming to loginuser");
var  role=e.target.elements[0].value;
var username=e.target.elements[1].value;
var password=e.target.elements[2].value;
localStorage.setItem('username',username);
localStorage.setItem('password',password);
localStorage.setItem('role',role)
//document.cookie=username
//document.cookie=password
//console.log("THE COOKIE IS"+document.cookie)
 this.userValidator();
}

userValidator(){
  console.log("coming to uservalidator");
  this.loginservice.validateLogin(localStorage.getItem('username'),localStorage.getItem('password')).subscribe(
    status=>{
      this.statusCode=status;
      if(status==200 && localStorage.getItem('role')==='user')
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