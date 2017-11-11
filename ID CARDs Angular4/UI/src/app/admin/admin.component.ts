import { Component, OnInit } from '@angular/core';
import {UserService} from '/JAVA/ID CARDs Angular4/UI/src/app/user.service';
import { Router } from '@angular/router';


export class AdminNavBar{
  tab:string;
}

const tabs:AdminNavBar[]=[
  {tab:"AdminHome"},
  {tab:"OrdersPlaced"},
  {tab:"TrackDelivarables"}
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  tabs=tabs;
  selectedTab
  constructor(private router:Router) { }

  ngOnInit() { 
  }
  onClick(tab: AdminNavBar) {
    console.log("coming");
    this.selectedTab = tab;
    this.router.navigate([tab.tab]);
  }

}
