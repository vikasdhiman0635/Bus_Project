import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BusService } from 'src/app/Service/bus.service';
import { SeatsService } from 'src/app/Service/seats.service';

@Component({
  selector: 'app-busmaincomponent',
  templateUrl: './busmaincomponent.component.html',
  styleUrls: ['./busmaincomponent.component.css']
})
export class BusmaincomponentComponent implements OnInit {

  email:any;

  id:any;

  busdata:any;

  busstatus:boolean;

  bus:any;

  seats:any;

  constructor(private service:BusService,private seatsservice:SeatsService,private router:Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit()
  {
    this.spinner.show();
    this.email=localStorage.getItem('email');
    // console.log(this.email);
    if(this.email!=null)
    {
      this.service.getdatabyowner(this.email).subscribe((Response)=>
      {
        // console.log(Response);
        this.busdata=Response;
        this.busstatus=this.busdata.check;
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);
      });
    }
  }

  checkbookseats()
  {
    let user=this.email+""+this.id;
    // console.log(user);
    this.seatsservice.checkseats(user).subscribe((Response)=>
    {
      // console.log(Response);
      this.seats=Response;
    });
  }

  getbusdaa(bus,id)
  {
    // console.log(bus);
    this.id=id;
    this.checkbookseats();
    this.bus=bus;
    this.router.navigate(['/h/profile/busprofile/main/id',id]);
  }

}
