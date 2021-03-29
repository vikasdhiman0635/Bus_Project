import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordServiceService {

  BaseURL='http://localhost:8910/forgetpassword';
  // BaseURL='http://localhost:8095/userdetails/forgetpassword';

  constructor(private http:HttpClient) { }

  verifyemail(email):Observable<any>
  {
    return this.http.post(this.BaseURL,email);
  }

  verifyotp(otp):Observable<any>
  {
    return this.http.post(this.BaseURL,otp);
  }

  updatepassword(password):Observable<any>
  {
    return this.http.put(this.BaseURL,password);
  }

}
