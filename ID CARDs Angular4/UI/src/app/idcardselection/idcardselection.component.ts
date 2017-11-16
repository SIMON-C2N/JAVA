import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup,FormArray, Validators, FormsModule,FormBuilder } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import { IdsubmitService  } from '../idsubmit.service';
import {Headers, Http} from '@angular/http';
import { Customer } from '../customer.interface';






export class TemplateMenu {
  imgurl: String;
}
export class Product { 
  constructor (public productid: number) {  } 
}

 
// export class iddetails{constructor(
//     public name: string,
//     public empid: string,
//     public issueddate: string,
//     public address: string,
//     public companyname : string,
//     public bloodgroup : string ,
//     public mobilenumber : string ,
//     public dob : string ,
//     public size : string ,
//     public userimage :File
   
//   ) {  }


// }





@Component({
  selector: 'app-idcardselection',
  templateUrl: './idcardselection.component.html',
  styleUrls: ['./idcardselection.component.css']
})

export class IdcardselectionComponent implements OnInit {

  model = new Product(1);
  nofemps:number[];
 
  url
formno
  i
 
  product
  price
  productid
  sizes: string[] = [
    'ID-1: 3.370 x 2.125 in (85.60 x 53.98 mm)',
    'ID-2: 4.134 x 2.913 in (105 x 74mm)'
    
  ]

  public cart=[];
  public recentProduct="None";
  constructor(private router: Router,private idcardService: IdsubmitService,private http: Http,private _fb: FormBuilder) {}
  public employee=[];
  UserImageFile:File;
  


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
  
  

  statusCode: number;
  requestProcessing = false; 
  profileIdToUpdate = null;
  processValidation = false;
  selectedProduct(product){
   this.url=product;
  } 
  
  clicked(productid){

    this.employee.push(this.productid);  
// for(var i=0;i<this.productid;i++){

// console.log("hai");
// }

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
profilefor(){

  if(this.formno!=null){

    


  for(this.i=0;this.i<this.formno;this.i++){  
    
    
    this.addAddress();
    

        } }else{
          alert("please enter  number");
        } 
            
   }


  
// idForm = new FormGroup({
//    name: new FormControl('',  Validators.required),
//    empid:new FormControl('', Validators.required),
//     issueddate:new FormControl('', Validators.required),
//     address:new FormControl('', Validators.required),
//     companyname:new FormControl('', Validators.required),
//     bloodgroup: new FormControl('',  Validators.required),
//     mobilenumber: new FormControl('',  Validators.required),
//     dob: new FormControl('',  Validators.required),
//     size: new FormControl('',  Validators.required),
//     UserImage: new FormControl('',  Validators.required)  });

//  idsubmit(value){
//    for(this.i=0;this.i<this.formno;this.i++){
//     let name = this.idForm.get('name').value;
//     let empid=this.idForm.get('empid').value;
//     let issueddate=this.idForm.get('issueddate').value;
//     let address =this.idForm.get('address').value;
//     let companyname =this.idForm.get('companyname').value;
//     let bloodgroup =this.idForm.get('bloodgroup').value;
//     let mobilenumber=this.idForm.get('mobilenumber').value;
//     let dob=this.idForm.get('dob').value;
//     let size=this.idForm.get('size').value;
//     const Image=this.User_Image.nativeElement;
//     if(Image.files && Image.files[0]){
//       this.UserImageFile=Image.files[0];
//     }
//     const ImageFile:File=this.UserImageFile;
    
    
//     let user = new iddetails(name,empid,issueddate,address,companyname,bloodgroup,mobilenumber,dob,size,ImageFile);
 
  
    
//     console.log(user);

  

//  this.idcardService.registerUser(user) 
//  .subscribe(successCode=>{
//    this.statusCode=successCode
//  },
//  errorCode => this.statusCode = errorCode
// );//subscribe
// }

//  }
//method
//Perform preliminary processing configurations
preProcessConfigurations() {
this.statusCode = null;
this.requestProcessing = true;   
}


public myForm: FormGroup;

   

    ngOnInit() {
        this.myForm = this._fb.group({
           
            addresses: this._fb.array([])
        });
        
      
       

        
   
    }

    initAddress() {
        return this._fb.group({
           
            name:  ['', Validators.required],
            empid: ['', Validators.required],
             issueddate: ['', Validators.required],
             address: ['', Validators.required],
             companyname: ['', Validators.required],
             bloodgroup:  ['', Validators.required],
             mobilenumber:  ['', Validators.required],
             dob:  ['', Validators.required],
             size:  ['', Validators.required]
        });
    }

    addAddress() {
      
     
        const control = <FormArray>this.myForm.controls['addresses'];
        const addrCtrl = this.initAddress();
        
        control.push(addrCtrl);
      
    }

    removeAddress(i: number) {
        const control = <FormArray>this.myForm.controls['addresses'];
        control.removeAt(i);
    }


    save(model: Customer) {

alert(model.addresses[0].name);
      console.log(model.addresses );
    }

 }




