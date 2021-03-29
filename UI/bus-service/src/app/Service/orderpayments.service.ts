import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderpaymentsService {

  BaseURL='http://localhost:8910/paymentss/';
  // BaseURL='http://localhost:8095/userdetails/paymentss/';

  constructor(private http:HttpClient) { }

  saveorder(alldata: any):Observable<any>
  {
    let url=this.BaseURL+"savepayments";
    return this.http.post(url,alldata);
  }
}
