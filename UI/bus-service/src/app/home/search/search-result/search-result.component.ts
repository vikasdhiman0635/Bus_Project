import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { TraveldataService } from 'src/app/Service/traveldata.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  searchbus:any;

  allbuss:any;

  busnumber:any;
  from:any;
  to:any;
  fromtime:any;
  totime:any;

  user:any;

  constructor(private service:TraveldataService,
    private spinner:NgxSpinnerService,
    private router: Router) { }

  ngOnInit()
  {
    if(localStorage.getItem("email"))
    {
      this.user=localStorage.getItem("email");
    }
    this.spinner.show();
 
    this.searchbus=JSON.parse(localStorage.getItem("searchdata"));
    this.from=this.searchbus.froms;
    this.to=this.searchbus.too;
    // localStorage.removeItem("searchdata");
    this.getallbuss();
  }

  getallbuss()
  {
    this.service.getallbuss().subscribe((Response)=>
    {
      this.allbuss=Response;
      console.log(this.allbuss);
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    });
  }

  bookbus(bus)
  {
    // console.log(bus);
    localStorage.setItem("travelid",bus.travelid);
    this.router.navigate(["/h/search/bookbus"]);
  }

}
