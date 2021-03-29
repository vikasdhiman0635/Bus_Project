import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  BaseURL='http://localhost:8908/busdata/';
  // BaseURL='http://localhost:8095/busdata/busdata/';

  constructor(private http:HttpClient) { }

  getdatabyowner(email: any):Observable<any>
  {
    let url=this.BaseURL+"getdatabyuser/"+email;
    return this.http.get(url);
  }

  savedata(data):Observable<any>
  {
    let url = this.BaseURL+"addbusdata";
    return this.http.post(url,data);
  }

  checkbusByBusnmber(busnumber: any):Observable<any>
  {
    let url=this.BaseURL+"getdatabybusnumber/"+busnumber;
    return this.http.get(url);
  }

  getbybusnumber(id):Observable<any>
  {
    let url=this.BaseURL+"getbusbyid/"+id;
    return this.http.get(url);
  }

  deletebus(id):Observable<any>
  {
    let url=this.BaseURL+"deletebus/"+id;
    return this.http.get(url);
  }

  disable(buss: any):Observable<any>
  {
    let url=this.BaseURL+"disablebusdata";
    return this.http.post(url,buss);
  }

  updatebus(data):Observable<any>
  {
    let url=this.BaseURL+"updatedatabybusnumber";
    return this.http.post(url,data);
  }

  getbusbybusnumber(busnumber):Observable<any>
  {
    let url=this.BaseURL+"getbusbybusnumbeaaar/"+busnumber;
    return this.http.get(url);
  }

}
