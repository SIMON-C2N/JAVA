import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerreceipt',
  templateUrl: './customerreceipt.component.html',
  styleUrls: ['./customerreceipt.component.css']
})
export class CustomerreceiptComponent implements OnInit {

constructor(private router: Router) {}

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
