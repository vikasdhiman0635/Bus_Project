import { Component, Input, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { BusService } from 'src/app/Service/bus.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-bus-check-points',
  templateUrl: './verify-bus-check-points.component.html',
  styleUrls: ['./verify-bus-check-points.component.css']
})
export class VerifyBusCheckPointsComponent implements OnInit {

  busdata:any;

  constructor(private loc:Location,
    private service: BusService,
    private torest: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router) { }

  ngOnInit()
  {
    this.spinner.show();
    // this.busdata=localStorage.getItem("bus");
    this.busdata=JSON.parse(localStorage.getItem("bus"));
    // console.log(this.busdata);
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }


  verified()
  {
    // console.log(this.busdata);
    this.spinner.show();
    this.service.savedata(this.busdata).subscribe((Response)=>
    {
      // console.log(Response);
      this.torest.success(Response.message, "Success");
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
      this.router.navigate(["/h/profile"]);
    });
  }

  goback()
  {
    this.loc.back();
  }

}
