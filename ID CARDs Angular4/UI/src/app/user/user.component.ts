import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {  } from './login/login.component';

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
    selectedTab: Menu;
      username = 'User';
    tabs = menutabs;
    citems= 0;
  constructor(private router: Router) {}

  ngOnInit() {
    
  }
  onClick(tab: Menu) {
    this.selectedTab = tab;
    this.router.navigate([tab.name]);
  }

  logout(){
    this.router.navigate(['login'])
  }

}
