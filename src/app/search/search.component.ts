import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    userName = ''
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }
  getUser(): void{
    if(this.userName === '')return;
    this.searchService.getResults(this.userName)
    .subscribe(
      (response: any)=>{
        this.searchService.passResults({results:response, count:response.totalCount})
      },
      // (error:any)=>{
      //   console.log(error); 
      // }
    )
  }

}
