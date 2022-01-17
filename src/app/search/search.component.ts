import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = "Search-Github"

  searchTerm = "";
  SearchService: any;
  constructor(private searchService: SearchService) {

   }

  ngOnInit(): void {
  }
  gitSearch(): void{
    if (this.searchTerm === "")return;
    this.searchService.getUser(this.searchTerm)
    .subscribe(
      (Response:any)=>{
        this.SearchService.passResults({results:Response.value, count:Response.totalCount});
      }
      )
  }

}
