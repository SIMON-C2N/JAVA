import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerlogged',
  templateUrl: './headerlogged.component.html',
  styleUrls: ['./headerlogged.component.css']
})
export class HeaderloggedComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  gotoHome()
  {
    this.router.navigate(['Home'])
  }

}
