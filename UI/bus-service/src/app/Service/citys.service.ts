import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitysService {

  // BaseURL="http://localhost:8095/userdetails/city"
  BaseURL="http://localhost:8909/city"

  constructor(private http:HttpClient) { }

  getcits():Observable<any>
  {
    return this.http.get(this.BaseURL);
  }

}
