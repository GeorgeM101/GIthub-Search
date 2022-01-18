import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoryComponent implements OnInit {
   @Input()repository:any;
  constructor() { }

  ngOnInit(): void {
  }

}