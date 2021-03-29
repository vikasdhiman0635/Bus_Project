import { Component, OnInit } from '@angular/core';
import { BusService } from 'src/app/Service/bus.service';

@Component({
  selector: 'app-resultset',
  templateUrl: './resultset.component.html',
  styleUrls: ['./resultset.component.css']
})
export class ResultsetComponent implements OnInit {

  orderdata:any;

  origbusdata:any;

  constructor(private service: BusService) { }

  ngOnInit()
  {
    this.orderdata=JSON.parse(localStorage.getItem("order"));
    console.log(this.orderdata);
    this.getbusbybusid();
  }

  getbusbybusid()
  {
    this.service.getbybusnumber(this.orderdata.busid).subscribe((Response)=>
    {
      this.origbusdata=Response?.bus;
      console.log(this.origbusdata);
    })
  }

}
