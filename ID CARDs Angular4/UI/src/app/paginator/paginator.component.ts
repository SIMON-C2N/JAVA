import { Component, OnInit } from '@angular/core';

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
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  len
  //pager object-user defined
  pager: any={};
  constructor() { }

  ngOnInit() {
    this.len=templates.length;
    this.setPage(1);
  }
  setPage(page:number){
    if(page < 1 || page > this.pager.totalpage)
    return;
  }

}
