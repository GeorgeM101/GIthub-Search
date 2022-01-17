import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  api = environment.APIkey

  searchResults = new Subject();

  constructor( private http: HttpClient) { }

  getUser(searchTerm:string): Observable <any> 
  {return this.http 
    .get('https://api.github.com/users/daneden?access_token=' 
  )

  }
  passResults(results:any):void{
    this.searchResults.next(results)
  }
  getPassedResults():Observable <any>{
    return this.searchResults.asObservable()

  }
}
