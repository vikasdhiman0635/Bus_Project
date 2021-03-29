import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  BaseURL='http://localhost:8910/user/';
  // BaseURL='http://localhost:8095/userdetails/user/';

  constructor(private http:HttpClient) {
    this.http=http;
   }

  

  getuserByid(email):Observable<any>
  {
    let url=this.BaseURL+"getdataByid/"+email;
    return this.http.get(url);
  }

  login(Userdata):Observable<any>
  {
    let url=this.BaseURL+"login";
    return this.http.post(url,Userdata);
  }

  saveuser(user):Observable<any>
  {
    const httpheaders=new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
    let url=this.BaseURL+'signup';
    console.log(url);
    return this.http.post(url,user);
  }

  registerbysocial(user: SocialUser):Observable<any> 
  {
    let url=this.BaseURL+'regsocial';
    return this.http.post(url,user);
  }

  loginsoc(user: SocialUser):Observable<any>
  {
    let url=this.BaseURL+'soclogin';
    return this.http.post(url,user);
  }

  updateuser(value: any):Observable<any>
  {
    let url=this.BaseURL+"updateprofile";
    return this.http.post(url,value);
  }

}
