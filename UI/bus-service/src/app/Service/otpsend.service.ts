import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpsendService {

  // BaseURL='http://localhost:8095/userdetails/paymentverify/';
  BaseURL='http://localhost:8910/paymentverify/';

  constructor(private http:HttpClient) { }

  sendmessage(email: any):Observable<any>
  {
    let url=this.BaseURL+"sendotp/"+email;
    return this.http.get(url);
  }
}
