import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';

export class Forms{
  fname:string;
}

const forms:Forms[]=[
  {fname:"form1"},
  {fname:"form1"},
  {fname:"form1"},  
];
export class IdFields{
  fieldName:string;
}
const field:IdFields[]=[
{fieldName:"Name"},
{fieldName:"EmployeeId"},
{fieldName:"IssuedDate"},
{fieldName:"Address"},
{fieldName:"CompanyName"},
{fieldName:"BloodGroup"},
{fieldName:"ContactNumber"},
{fieldName:"DOB"},
{fieldName:"Size"},
{fieldName:"EmployeeImage"},
{fieldName:"CompanyLOGO"}
];

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


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User[];
  i
  formno
  nofemps:number[];
  formcount=forms;
  fields=field;
  regForm = new FormGroup({
    username: new FormControl('',  Validators.required),
    email:new FormControl('', Validators.required),
    password:new FormControl('', Validators.required),
    cpassword:new FormControl('', Validators.required),
    mobilenumber:new FormControl('', Validators.required),
    address:new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit() {
      
  }
  profilefor(){
    for(this.i=0;this.i<=this.formno;this.i++){  
      this.nofemps=Array(this.i);
      console.log(this.nofemps)   
    }    
  }
}
