import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  results: any;

  constructor(
    private searchService:SearchService
  ) { }

  ngOnInit(): void {
    this.searchService.getPassedResults()
    .subscribe(
      (Response: any)=>{
        this.results = Response.results;
      }
    )
  }

}
