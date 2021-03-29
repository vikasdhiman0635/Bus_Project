import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {


  // BaseURL='http://localhost:8095/userdetails/address/';
  BaseURL='http://localhost:8910/address/';

  constructor(private http:HttpClient) { }

  savedata(category: any):Observable<any>
  {
    let url=this.BaseURL+"addAddress";
    return this.http.post(url,category);
  }

  getdatabyid(useraddressid: any):Observable<any>
  {
    let url=this.BaseURL+"getaddressByid/"+useraddressid;
    // console.log(url);
    return this.http.get(url);
  }

  deleteaddress(addresstableid: any):Observable<any>
  {
    let url=this.BaseURL+'deleteByid/'+addresstableid;
    return this.http.delete(url);
  }

}
