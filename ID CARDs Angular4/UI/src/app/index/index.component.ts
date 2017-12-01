import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class Menu
{
  menuitem:string;
}

const menuitem:Menu[]=[
  {
    menuitem:'Login'
  },
]

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  selectedItem: Menu;
  menuitems=menuitem;
  constructor(private router: Router) { }
  ngOnInit() {    
  }

  onClick(menuitem:Menu)
  {
    this.selectedItem=menuitem; 
    this.router.navigate([menuitem.menuitem])
  }
  scrolltoaboutus()
  {
    let aboutus=document.querySelector("#aboutus");
    if(aboutus)
    {
      aboutus.scrollIntoView();
    }
  }  
  scrolltocontactus()
  {
    let contactus=document.querySelector("#contactus");    
     if(contactus)
     {
       contactus.scrollIntoView();
     }
  }
  scrolltotop()
  {
    let top=document.querySelector("#top");
    if(top)
    {
      top.scrollIntoView();
    }
  }
}
