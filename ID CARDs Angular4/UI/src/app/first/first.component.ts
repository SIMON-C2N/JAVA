import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {


  public options = {
    spinable: true,
    buttonWidth: 40,
};


 public wings = [
    {
        
        'title': 'Profile',
        'color': '#ea2a29',
        'icon': {'name': 'glyphicon glyphicon-user'}
     
    }, {
        'title': 'profile',
        'color': '#f16729',
        'icon': {'name': 'fa fa-laptop'},
        'link':'login'
    }, {
        'title': 'iPhone',
        
        'color': '#f89322',
        'icon': {'name': 'fa fa-mobile'}
    }, {
        'title': 'iWatch',
        'color': '#ffcf14',
        'icon': {'name': 'fa fa-clock-o'}
    }
];

public gutter = {
    top: 60,
};

public startAngles = {
    topLeft: 10,
}


  constructor() { }

  ngOnInit() {


  }

}
