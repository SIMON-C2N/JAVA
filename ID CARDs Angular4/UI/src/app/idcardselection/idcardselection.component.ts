import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';



export class TemplateMenu {
  imgurl: String;
}
export class NameChooser{
  nametype: string;
}
export class ValidityChooser{
  issuedType: string;
}

const chooseName: NameChooser[] = [
 {nametype:'FirstName'},
 {nametype:'SecondName'},
 {nametype:'FullName'}
];

const chooseVallidityType:ValidityChooser[]=[
  {issuedType:'issueBy'},
  {issuedType:'endBy'}
];
export class IdFields{
  fieldName:string;
}
const field:IdFields[]=[
{fieldName:"Name"},
{fieldName:"EmployeeId"},
{fieldName:"IssuedDate"},
{fieldName:"Address"},
{fieldName:"CompanyName"},
{fieldName:"BloodGroup"},
{fieldName:"ContactNumber"},
{fieldName:"DOB"},
{fieldName:"Size"},
{fieldName:"EmployeeImage"},
{fieldName:"CompanyLOGO"}
];


@Component({
  selector: 'app-idcardselection',
  templateUrl: './idcardselection.component.html',
  styleUrls: ['./idcardselection.component.css']
})

export class IdcardselectionComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  nameTypes=chooseName;
  validityCooser=chooseVallidityType;
  url
  product
  price
  i
  formno
  nofemps:number[];
  fields=field;
  sizes: string[] = [
    'ID-1: 3.370 x 2.125 in (85.60 x 53.98 mm)',
    'ID-2: 4.134 x 2.913 in (105 x 74mm)'
  ]
  public cart=[];
  public recentProduct="None";
  
  constructor(private router: Router) {}
  
  
  public  productList=[
  {"id":"idcard1","price":50,"imageURL":'template001',"size1":'ID-1: 3.370 x 2.125 in (85.60 x 53.98 mm)',"size2":'ID-2: 4.134 x 2.913 in (105 x 74mm)'}, 
  {"id":"idcard2","price":50,"imageURL":'template002',"size1":'ID-1: 3.370 x 2.125 in (85.60 x 53.98 mm)',"size2":'ID-2: 4.134 x 2.913 in (105 x 74mm)'},
  {"id":"idcard3","price":25,"imageURL":'template003',"size1":'ID-1: 3.370 x 2.125 in (85.60 x 53.98 mm)',"size2":'ID-2: 4.134 x 2.913 in (105 x 74mm)'},
  {"id":"idcard4","price":150,"imageURL":'template004',"size1":'ID-1: 3.370 x 2.125 in (85.60 x 53.98 mm)',"size2":'ID-2: 4.134 x 2.913 in (105 x 74mm)'},
  {"id":"idcard5","price":20,"imageURL":'template005',"size1":'ID-1: 3.370 x 2.125 in (85.60 x 53.98 mm)',"size2":'ID-2: 4.134 x 2.913 in (105 x 74mm)'},
  {"id":"idcard6","price":30,"imageURL":'template006',"size1":'ID-1: 3.370 x 2.125 in (85.60 x 53.98 mm)',"size2":'ID-2: 4.134 x 2.913 in (105 x 74mm)'},
  {"id":"idcard7","price":40,"imageURL":'template007',"size1":'ID-1: 3.370 x 2.125 in (85.60 x 53.98 mm)',"size2":'ID-2: 4.134 x 2.913 in (105 x 74mm)'},
  {"id":"idcard8","price":70,"imageURL":'template008',"size1":'ID-1: 3.370 x 2.125 in (85.60 x 53.98 mm)',"size2":'ID-2: 4.134 x 2.913 in (105 x 74mm)'},
  {"id":"idcard9","price":80,"imageURL":'template009',"size1":'ID-1: 3.370 x 2.125 in (85.60 x 53.98 mm)',"size2":'ID-2: 4.134 x 2.913 in (105 x 74mm)'},
  {"id":"idcard10","price":90,"imageURL":'template010',"size1":'ID-1: 3.370 x 2.125 in (85.60 x 53.98 mm)',"size2":'ID-2: 4.134 x 2.913 in (105 x 74mm)'}];
  
  
  
  selectedProduct(product){
   this.url=product;
  } 
  
  
   
   selectedItem(url){
    this.cart.push(this.url.id);
    
    alert(this.url.id+' was added to cart');
    alert(this.cart)
   }
  
  onselectTemplate(temp: TemplateMenu) {
    this.url=temp.imgurl;
    console.log("coming");
  }
 
  
  ngOnInit() {
    this.dropdownList = [
      {"id":1,"itemName":"India"},
      {"id":2,"itemName":"Singapore"},
      {"id":3,"itemName":"Australia"},
      {"id":4,"itemName":"Canada"},
      {"id":5,"itemName":"South Korea"},
      {"id":6,"itemName":"Germany"},
      {"id":7,"itemName":"France"},
      {"id":8,"itemName":"Russia"},
      {"id":9,"itemName":"Italy"},
      {"id":10,"itemName":"Sweden"}
    ];
this.selectedItems = [
        {"id":2,"itemName":"Singapore"},
        {"id":3,"itemName":"Australia"},
        {"id":4,"itemName":"Canada"},
        {"id":5,"itemName":"South Korea"}
    ];
this.dropdownSettings = {
          singleSelection: false, 
          text:"Select Countries",
          selectAllText:'Select All',
          unSelectAllText:'UnSelect All',
          enableSearchFilter: true
        };            
  }
  onItemSelect(item){
    console.log('Selected Item:');
    console.log(item);
}
OnItemDeSelect(item){
    console.log('De-Selected Item:');
    console.log(item);
}
showCheckboxes(){
  console.log("coming to here");
}
profilefor(){
  for(this.i=0;this.i<=this.formno;this.i++){
    this.nofemps=Array(this.i);
    console.log(this.nofemps)   
  }    
}
//for placed orders
placedOrders(ordeid:string){
  console.log("coming");
}

}
