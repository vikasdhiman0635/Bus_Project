import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService 
{
BaseURL='http://localhost:8910/paymentss/';
  // BaseURL='http://localhost:8095/userdetails/paymentss/';

  constructor(private http:HttpClient) { }

  getalldata(userid):Observable<any>
  {
    let url=this.BaseURL+"getallpaymentsbyid/"+userid;
    console.log(url);
    return this.http.get(url);
  }

}
