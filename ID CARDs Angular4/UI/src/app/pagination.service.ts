import { Injectable } from '@angular/core';

@Injectable()
export class PaginationService {

  constructor() { }
  //get page function
  getpage(totalItems:number, currentPage:number=1, pageSize:number=10){
    //calculate total pages
    let totalpages= Math.ceil(totalItems/pageSize);
    let startpage:number;
    let endpage:number;
    if(totalpages<=10){
      //less than 10 pages so display all pages
      startpage=1;
      endpage=totalpages;
    }
    else
    {
      //more than 10 pages so calculate number of pages
      if(currentPage<=6)
      {
        startpage=1;
        endpage=10;
      }
      else if(currentPage+4>=totalpages)
      {
        startpage=totalpages-9;
        endpage=totalpages;
      }
      else
      {
        startpage=totalpages-5;
        endpage=totalpages+4;
      }
    }
    let startIndex=(currentPage-1)*pageSize;
    let endIndex=Math.min(startIndex+pageSize-1,totalItems-1);
    let pages=Array.from(Array(endpage+1-startpage), (_ , i)=>startpage +i );

    return{
      totalItems: totalItems,
      currentPage:currentPage,
      pageSize: pageSize,
      totalpages:totalpages,
      startpage:startpage,
      endpage: endpage,
      startIndex:startIndex,
      endIndex:endIndex,
      pages:pages
    };
  }
}
