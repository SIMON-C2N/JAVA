import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
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
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  selectedTab: Menu;
  username = 'User';
tabs = menutabs;
constructor(private router: Router) {}

ngOnInit() {
}
onClick(tab: Menu) {
this.selectedTab = tab;
this.router.navigate([tab.name]);
}}
