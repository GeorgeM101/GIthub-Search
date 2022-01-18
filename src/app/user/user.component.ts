import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    results: any[] = [];
    count = 0;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.getPassedResults()
    .subscribe((response:any)=> {
      // console.log(response);
      
      this.results.push(response.results);
      this.count = response.count;
      console.log(this.results, this.count);
    }
    )
  }

}
