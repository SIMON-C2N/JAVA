import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

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
      username = 'Venkatesh';
    tabs = menutabs;
  constructor(private router: Router) {}

  ngOnInit() {
  }
  onClick(tab: Menu) {
    this.selectedTab = tab;
    this.router.navigate([tab.name]);
  }
}
