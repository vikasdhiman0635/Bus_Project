import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeatsService {

  BaseURL='http://localhost:8908/seats/';
  // BaseURL='http://localhost:8095/busdata/seats/';

  constructor(private http:HttpClient) { }

  checkseats(busidd):Observable<any>
  {
    let url=this.BaseURL+"checkseats/"+busidd;
    return this.http.get(url);
  }

}
