import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../register/register.component';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';


export class Menu {
  name: string;    
}

const menutabs: Menu[] = [
  {name: 'Home'},
  {name: 'IdCardSelection'},
  {name: 'SavedDetails'},
  {name: 'MyOrders'},
  {name: 'CustomerReceipt'}
];



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    allusers: User[];
    statusCode: number;
    selectedTab: Menu;
    //username = 'User';
    tabs = menutabs;
    citems= 0;
    currentUser ='';
    i: any;
    j: any;
    token: any;
    arrayUser:string[];
    //to edit profile
    regForm = new FormGroup({
      username: new FormControl('',  Validators.required),
      email:new FormControl('', Validators.required),
      password:new FormControl('', Validators.required),
      cpassword:new FormControl('', Validators.required),
      mobilenumber:new FormControl('', Validators.required),
      address:new FormControl('', Validators.required)
    });
  constructor(private router: Router, private loginservice: LoginService) {}

  ngOnInit() {
    this.currentUser=this.loginservice.getWelcomeUserName();     
    //this.loginservice.currentMessage.subscribe(message=>this.currentUser=message)
    this.loginservice.getAllUserDetails().subscribe(
      users =>{
        this.allusers = users;
         //to get the details of the current user
      for(this.i=0; this.i<users.length;this.i++)
      {
        this.token=true;
        for(this.j=0; this.j<users.length;this.j++)
        {
          this.token=true;
          if(this.currentUser==users[this.j].username)
          {
            this.currentUser=users[this.j].username;
            this.token=false;
          }
          if(this.token==false)
          break;
        }
        if(this.token==false)
        break;
      }
        console.log(users);
      },
      errorCode => this.statusCode = errorCode
    );
  }

  //for nav bar
  onClick(tab: Menu) {
    this.selectedTab = tab;
    this.router.navigate([tab.name]);
  }
  //for logout function
  logout(){
    this.router.navigate(['login'])
  }

  

}
