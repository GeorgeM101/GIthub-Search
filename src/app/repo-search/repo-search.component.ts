import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {

  userName = ''
  constructor(private searchService: RepositoryService) { }

  ngOnInit(): void {
  }
  getRepo(): void{
    if(this.userName === '')return;
    this.searchService.getResults(this.userName)
    .subscribe(
      (response: any)=>{
        this.searchService.passResults({repository:response})
      },
      // (error:any)=>{
      //   console.log(error); 
      // }
    )
  }

}
