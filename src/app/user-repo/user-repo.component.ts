import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.css']
})
export class UserRepoComponent implements OnInit {

  results: any

  constructor(private repositoryService: RepositoryService) { }

  ngOnInit(): void {
    this.repositoryService.getPassedResults()
    .subscribe((response:any)=> {
      
      this.results = response.repository;
      // console.log(response.repository);
      console.log(this.results);
      
    }
    )
  }

}
