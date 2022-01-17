import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiKey = environment.APIkey;
  userName = ''
  constructor(private http: HttpClient) { }
  getResults(userName:string): Observable<any>{
    return this.http.get('https://api.github.com/users/GeorgeM101' + this.userName,
    ) 
  }
}
