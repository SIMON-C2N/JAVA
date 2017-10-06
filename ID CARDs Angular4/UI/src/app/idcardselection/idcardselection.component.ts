import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

export class TemplateMenu {
  imgurl: String;
}

const templates: TemplateMenu[] = [
  {imgurl: 'assets/templates/template001.jpg'},
  {imgurl: 'assets/templates/template002.jpg'},
  {imgurl: 'assets/templates/template003.jpg'},
  {imgurl: 'assets/templates/template004.jpg'},
  {imgurl: 'assets/templates/template005.jpg'},
  {imgurl: 'assets/templates/template006.jpg'},
  {imgurl: 'assets/templates/template007.jpg'},
  {imgurl: 'assets/templates/template008.jpg'},
  {imgurl: 'assets/templates/template010.jpg'},
  {imgurl: 'assets/templates/template012.jpg'},
  {imgurl: 'assets/templates/template013.jpg'},
  {imgurl: 'assets/templates/template014.jpg'}
];

@Component({
  selector: 'app-idcardselection',
  templateUrl: './idcardselection.component.html',
  styleUrls: ['./idcardselection.component.css']
})
export class IdcardselectionComponent implements OnInit {
  temps = templates;
  constructor(private router: Router) {}
  onselectTemplate(temp: TemplateMenu) {
  }
  ngOnInit() {
  }
}
