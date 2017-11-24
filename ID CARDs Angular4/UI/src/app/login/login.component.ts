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
  status:number
  constructor( private router: Router ,private userservice: UserService, private loginservice: LoginService ) { }
  ngOnInit() {
    this.loginservice.getAllUserDetails().subscribe(
      users=>{
        this.allusers=users;
        console.log(this.allusers);
      }
    );
    this.statusCode=this.loginservice.getstatus();
   /*if(this.loginservice.getstatus()==201){
     alert("registration successfull");
   }*/
  }

//after submiting login form control comes here
loginUser(e){ 
console.log("coming to loginuser");
var  role=e.target.elements[0].value;
var username=e.target.elements[1].value;
var password=e.target.elements[2].value;
localStorage.setItem('username',username);//localStorage
localStorage.setItem('password',password);
localStorage.setItem('role',role);
console.log("this is find"+this.allusers.find(x => x.username == 'gopi'));
//document.cookie=username
//document.cookie=password
//console.log("THE COOKIE IS"+document.cookie)
 this.userValidator();
}

userValidator(){
  console.log("coming to uservalidator");
  this.loginservice.validateLogin(localStorage.getItem('username'),localStorage.getItem('password'),localStorage.getItem('role')).subscribe(
    status=>{
      this.statusCode=status;
      console.log(this.statusCode);
      console.log(localStorage.getItem('role'));
      if(status==200 && localStorage.getItem('role')==='user')
      {
        this.loginservice.setUserLoggedIn();
        console.log("checking user login");
       this.router.navigate (['Home']);
      }     
      else if(status==200 && localStorage.getItem('role')==='deliver')
      {
        this.loginservice.setUserLoggedIn();
        console.log("checking deliver login");
        this.router.navigate(['deliver'])
      }
      else if(status==200 && localStorage.getItem('role')==='admin')
      {
        this.loginservice.setUserLoggedIn();
        console.log("checking deliver login");
        this.router.navigate(['admin'])
      }
      else
      this.router.navigate (['login']);
    },
    status =>{
      this.statusCode =status
      console.log(status)
    } 
  );
}

}