import { Component, OnInit, ViewChild } from '@angular/core';
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

export interface IEmps{
  name:string;
  employeeid:string;
  issuedDate:string,
  address:string,
  companyName:string,
  bloodGroup:string,
  contactNumber:string,
  dob:string,
  size:string,
  employeeImage:string,
  companylogo:string 
}

export class Emps{
  constructor(
     public name:string,
     public employeeid:string,
     public issuedDate:string,
     public address:string,
     public companyName:string,
     public bloodGroup:string,
     public contactNumber:string,
     public dob:string,
     public size:string,
     public employeeImage:string,
     public companylogo:string) {}
}



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  emp:Emps;
  emps:IEmps[];
  i
  formno
  nofemps:number[];
  formcount=forms;
  fields=field;
  companylogofile:File;
  @ViewChild('companylogo') logo;
  regEmpForm = new FormGroup({
    name: new FormControl('',  Validators.required),
    employeeid:new FormControl('', Validators.required),
    issuedDate:new FormControl('', Validators.required),
    address:new FormControl('', Validators.required),
    companyName:new FormControl('', Validators.required),
    bloodGroup:new FormControl('', Validators.required),
    contactNumber:new FormControl('', Validators.required),
    dob:new FormControl('', Validators.required),
    size:new FormControl('', Validators.required),
    employeeImage:new FormControl('', Validators.required),
    companylogo:new FormControl('', Validators.required),
  });
  companylogo
  constructor() { }

  ngOnInit() {
    
  }
  profilefor(){
    for(this.i=0;this.i<=this.formno;this.i++){
      this.nofemps=Array(this.i);
      console.log(this.nofemps)   
    }//end of for
    
  }
  multiformController(){
    console.log("coming");
    this.companylogo=this.logo.nativeElement;
    for(this.i=0;this.i<=this.formno;this.i++){
      console.log("Entered to for loop");
      let name = this.regEmpForm.get('name').value;
      let employeeid = this.regEmpForm.get('employeeid').value;
      let issuedDate = this.regEmpForm.get('issuedDate').value;
      let address = this.regEmpForm.get('address').value;
      let companyName = this.regEmpForm.get('companyName').value;
      let bloodGroup = this.regEmpForm.get('bloodGroup').value;
      let contactNumber = this.regEmpForm.get('contactNumber').value;
      let dob = this.regEmpForm.get('dob').value;
      let size = this.regEmpForm.get('size').value;
      let employeeImage = this.regEmpForm.get('employeeImage').value;
      this.emps= Array(new Emps(name,employeeid,issuedDate,address,companyName,bloodGroup,contactNumber,dob,size,employeeImage,this.companylogo.value))
    }   
    const Image=this.logo.nativeElement;
    if(Image.files&&Image.files[0]){
      this.companylogofile=Image.files[0];
    }
    const imagefile:File=this.companylogofile;
    console.log(imagefile);
    console.log(this.emps);
    }
    
}
