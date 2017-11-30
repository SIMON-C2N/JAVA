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
  {
    menuitem:'AboutUs'
  },
  {
    menuitem:'ContactUs'
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
  scrolltoX()
  {
    let x=document.querySelector("#targetted");
    if(x)
    {
      x.scrollIntoView();
    }     
  }  
  scrolltoY()
  {
    let y=document.querySelector("#targetted1");
    if(y)
    {
      y.scrollIntoView();
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
