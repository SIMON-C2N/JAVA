import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class TemplateMenu {
  imgurl: String;
}

const templates: TemplateMenu[] = [
  {imgurl: 'assets/templates/template001.jpg'},
  {imgurl: 'assets/templates/template002.jpg'},
  {imgurl: 'assets/templates/template003.jpg'},
  {imgurl: 'assets/templates/template004.jpg'},
];

@Component({
  selector: 'app-idselection',
  templateUrl: './idselection.component.html',
  styleUrls: ['./idselection.component.css']
})
export class IdselectionComponent implements OnInit {

  temps = templates;
  url
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
  
  onselectTemplate(temp: TemplateMenu) {
    this.url=temp.imgurl;
  }
}
