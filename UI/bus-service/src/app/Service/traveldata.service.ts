import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraveldataService {

  BaseURL='http://localhost:8908/traveldata/';
  // BaseURL='http://localhost:8095/busdata/traveldata/';

  constructor(private http:HttpClient) { }

  deletedata(travelid: any):Observable<any>
  {
    let url=this.BaseURL+"deleteid/"+travelid;
    return this.http.get(url);
  }

  getallbuss():Observable<any>
  {
    let url=this.BaseURL+"getallbuss";
    return this.http.get(url);
  }

  getdatabyid(travelid):Observable<any>
  {
    let url=this.BaseURL+"getdataBytravelId/"+travelid;
    return this.http.get(url);
  }

}
