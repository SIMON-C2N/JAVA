import { Component, OnInit , Directive, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
   onSubmit( data: any ) {
    console.log( data );
}

  constructor( private router: Router ,private user: UserService ) { }
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
  else if (role == 'user' &&  username == 'user' &&  password == 'user'){
    
      this.router.navigate (['user']);
    }
  else {
    this.router.navigate (['login']);
  }

}

}