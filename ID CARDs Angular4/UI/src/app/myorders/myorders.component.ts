import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
  
}
