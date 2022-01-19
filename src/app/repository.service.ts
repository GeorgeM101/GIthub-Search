import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  apiKey = environment.AccessToken;
  repoName = ''

searchResults = new Subject()

constructor(private http: HttpClient) { }
getResults(userName:string): Observable<any>{
  return this.http.get('https://api.github.com/users/'+ userName + '/repos'
  ) 
}
passResults(results: any):void{
  this.searchResults.next(results)
}
getPassedResults(): Observable<any>{
  return this.searchResults.asObservable()
}
}
