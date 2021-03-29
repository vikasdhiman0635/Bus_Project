import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BusService } from 'src/app/Service/bus.service';
import { SeatsService } from 'src/app/Service/seats.service';
import { Location } from "@angular/common";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-show-main-bus',
  templateUrl: './show-main-bus.component.html',
  styleUrls: ['./show-main-bus.component.css']
})
export class ShowMainBusComponent implements OnInit {

  email: any;

  id: any;

  bus: any;

  seats: any;

  constructor(private arouter: ActivatedRoute,
    private seatsservice: SeatsService,
    private loc: Location,
    private service: BusService,
    private router: Router,
    private toaster: ToastrService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    // this.id=this.arouter.snapshot.paramMap.get("id");
    this.spinner.show();
    this.arouter.paramMap.subscribe((params: ParamMap) => {
      let getid = parseInt(params.get('id'));
      this.id = getid;
      this.getdata();
    });

    this.email = localStorage.getItem('email');
    if (this.email == null) {
      this.router.navigate(['/']);
    }
  }

  getdata() {
    this.service.getbybusnumber(this.id).subscribe((Response) => {
      // console.log(Response);
      this.bus = Response.bus;
      this.checkbookseats();
    });
  }

  checkbookseats() {
    let user = this.email + "" + this.id;
    this.seatsservice.checkseats(user).subscribe((Response) => {
      this.seats = Response;
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    });
  }

  addcheckpoints() {
    this.router.navigate(['/h/profile/busprofile/busoperations/addcheckpoints', this.id]);
  }

  updatestatus(id)
  {
    // console.log(id);
    this.service.deletebus(id).subscribe((Response)=>
    {
      this.loc.back();
    })
  }

  disable(buss)
  {
    buss.busstatus=false;
    // console.log(buss);
    this.service.disable(buss).subscribe((Response)=>
    {
      // console.log(Response);
      if(Response.message=="Bus is not exist")
      {
        this.toaster.error(Response.message,"Problem");
      }
      if(Response.message=="Update Successful")
      {
        this.toaster.success(Response.message,"Successful");
      }
      
    })
  }

  active(buss)
  {
    buss.busstatus=true;
    // console.log(buss);
    this.service.disable(buss).subscribe((Response)=>
    {
      // console.log(Response);
      if(Response.message=="Bus is not exist")
      {
        this.toaster.error(Response.message,"Problem");
      }
      if(Response.message=="Update Successful")
      {
        this.toaster.success(Response.message,"Successful");
      }
    })
  }

  update(id)
  {
    this.router.navigate(['/h/profile/busprofile/busoperations/updatebus', this.id]);
  }

}
