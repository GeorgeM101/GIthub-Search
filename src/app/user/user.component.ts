import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    results: any[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.getPassedResults()
    .subscribe((response:any)=> {
      
      this.results.push(response.results);
      console.log(this.results);
    }
    )
  }

}
