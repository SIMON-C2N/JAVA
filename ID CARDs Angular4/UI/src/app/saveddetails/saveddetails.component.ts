import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saveddetails',
  templateUrl: './saveddetails.component.html',
  styleUrls: ['./saveddetails.component.css']
})
export class SaveddetailsComponent implements OnInit {
  
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
