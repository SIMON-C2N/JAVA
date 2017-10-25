import { Component, OnInit , Directive, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../register/register.component';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  allusers: User[];
  statusCode: number;
  userflag: boolean;
  username: any;
  vusername='';
  vpassword='';
   onSubmit( data: any ) {
    console.log( data );
}

  constructor( private router: Router ,private user: UserService, private loginservice: LoginService ) { }
  ngOnInit() {
  } 

loginUser(e){ 
e.preventDefault();

console.log(e);
var  role    =e.target.elements[0].value;
var username=e.target.elements[1].value;
var password=e.target.elements[2].value;

if (role == 'admin' &&  username == 'admin' &&  password == 'admin'){
this.user.setUserLoggedIn();
  this.router.navigate (['adminHome']);
}
 else if (role == 'deliver' &&  username == 'deliver' &&  password == 'deliver'){
  
    this.router.navigate (['deliverHome']);
  }
  else {
    this.router.navigate (['login']);
  }
 this.getAllUsers();
 this.vusername=username;
 if(this.userflag)
 {
  this.router.navigate (['user']);
 }
}

getAllUsers() {
  this.loginservice.getAllUserDetails().subscribe(
    users =>this.allusers = users,
    errorCode => this.statusCode = errorCode
  );  
}

userValidator(){
  this.vusername=this.username
 return false;
}

}