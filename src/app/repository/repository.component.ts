import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
   @Input()repository:any;
  constructor() { }

  ngOnInit(): void {
  }

}