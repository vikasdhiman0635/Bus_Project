import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BusService } from 'src/app/Service/bus.service';

@Component({
  selector: 'app-verify-bus-seats',
  templateUrl: './verify-bus-seats.component.html',
  styleUrls: ['./verify-bus-seats.component.css']
})
export class VerifyBusSeatsComponent implements OnInit {

  busData:any

  origbusdata:any;

  constructor(private arouter: ActivatedRoute,
    private service: BusService,
    private router:Router) { }

  ngOnInit()
  {
    this.busData=JSON.parse(localStorage.getItem("budata"));
    // console.log(this.busData);
    this.getbusbybusid();
  }

  getbusbybusid()
  {
    this.service.getbybusnumber(this.busData.busid).subscribe((Response)=>
    {
      this.origbusdata=Response?.bus;
      // console.log(this.origbusdata);
    })
  }

  payment()
  {
    // console.log(this.busData);
    this.router.navigate(['/h/search/bookbus/payment']);
  }

}
