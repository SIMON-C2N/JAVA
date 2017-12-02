import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import {UserService } from '../user.service';
import { User } from '../register/register.component';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
declare var jquery:any;
declare var $ :any;


export class Menu {
  name: string;    
}

const menutabs: Menu[] = [
  {name: 'Home'},
  {name: 'SavedDetails'},
  {name: 'MyOrders'},
  {name: 'CustomerReceipt'}
];

export class UserForUpdate{
  constructor(
      public profileId:number,
      public username: string, 
      public email: string,
      public password: string,
      public cpassword: string,
      public mobilenumber: string,
      public address:string) { 
     }
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {
    allusers: User[];
    cUser:UserForUpdate[];
    statusCode: number;
    selectedTab: Menu;
    username 
    profileid
    tabs = menutabs;
    citems= 0;
    currentUser
    //for registration
    regForm = new FormGroup({
      username: new FormControl('',  Validators.required),
      email:new FormControl('', Validators.required),
      password:new FormControl('', Validators.required),
      cpassword:new FormControl('', Validators.required),
      mobilenumber:new FormControl('', Validators.required),
      address:new FormControl('', Validators.required)
    });
    //for view profile
    profileForm = new FormGroup({
      username: new FormControl('',  Validators.required),
      email:new FormControl('', Validators.required),
      password:new FormControl('', Validators.required),
      cpassword:new FormControl('', Validators.required),
      mobilenumber:new FormControl('', Validators.required),
      address:new FormControl('', Validators.required)
    });
  constructor(private router: Router, private loginservice: LoginService, private userservice: UserService) {}

  ngOnInit() {
    this.username=localStorage.getItem('username');
    console.log("the coming uname"+this.username);
   
    //gets all the users from db
   this.loginservice.getAllUserDetails().subscribe(
      users =>{
        this.allusers = users;
        console.log(users);
      },
      errorCode => this.statusCode = errorCode
    );
    //GETS THE CURRENT USER DETAILS
    this.loginservice.getProfileByUserName(this.username).subscribe(
      currentuser=>{
        this.cUser=currentuser;
        this.profileForm.setValue(
          {username:currentuser[0].username,
            email:currentuser[0].email,
            password:currentuser[0].password,
            cpassword:currentuser[0].cpassword,
            mobilenumber:currentuser[0].mobilenumber,
            address:currentuser[0].address
          });
          this.profileid=currentuser[0].profileId
        console.log(currentuser);
      },
      errorCode => this.statusCode = errorCode
    );
  }//onInIt

  //for nav bar
  onClick(tab: Menu) {
    this.selectedTab = tab;
    this.router.navigate([tab.name]);
  }
  showTemplates()
  {
    this.router.navigate(['idselection']);
  }
  //for editUserProfile
  editUserProfile(){
    console.log("coming to editUserProfile");
    this.profileid
    let username = this.profileForm.get('username').value;
    let email = this.profileForm.get('email').value;
    let password = this.profileForm.get('password').value;
    let cpassword = this.profileForm.get('cpassword').value;	  
    let mobilenumber = this.profileForm.get('mobilenumber').value;
    let address = this.profileForm.get('address').value;
    let updatedUserDtls = new UserForUpdate(this.profileid,username,email,password,cpassword,mobilenumber,address);
    console.log(updatedUserDtls);
    this.userservice.updateUser(updatedUserDtls)
    .subscribe(successCode=>{
      this.statusCode=successCode;
      if(this.statusCode==200)
      alert("Details updated successfully");
    },
    errorCode => this.statusCode = errorCode
  );
  }
  //for logout function
  logout(){
    this.username='';
    this.currentUser='';
    console.log("username and current user cleaning done");
    this.router.navigate(['Login'])
  }
  navigatetoHome(){
    this.router.navigate(['user']);
  }
  navigatetoIDSelection(){
    this.router.navigate(['idselection']);
  }  
  navigatetoSavedDetails(){
    this.router.navigate(['SavedDetails']);
  }
  navigatetoEditMyOrders(){
    this.router.navigate(['MyOrders']);
  }
  navigatetoCustomerReceipt(){
    this.router.navigate(['CustomerReceipt']);
  }
  
}//class