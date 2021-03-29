import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { CheckBackSecurity } from 'src/app/Interface/check-back-security';
import { BusService } from 'src/app/Service/bus.service';

@Component({
  selector: 'app-add-check-points',
  templateUrl: './add-check-points.component.html',
  styleUrls: ['./add-check-points.component.css']
})
export class AddCheckPointsComponent implements OnInit {

  // canDeactivate(): boolean {
  //   return !this.sec;
  // }

  sec=false;

  id: any;

  bus: any;

  seats: any;
  weeks: any;

  busnumber: any;

  constructor(private aroute: ActivatedRoute,
    private router: Router,
    private service: BusService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService) { }
  

  ngOnInit() {
    this.spinner.show();
    this.aroute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get("id"));
      this.id = id;
      this.getdata();
    })
  }

  getdata() {
    this.service.getbybusnumber(this.id).subscribe((Response) => {
      // console.log(Response);
      this.bus = Response.bus;
      this.weeks = this.bus.weeks;
      this.seats = this.bus.seat;
      this.busnumber = this.bus.busnumber;
      // console.log(this.busnumber);
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    });
  }

  addbus = this.fb.group({
    id: [''],
    useremail: [''],
    busnumber: [''],
    bustype: [''],
    bustravelFrom: [''],
    bustravelTo: [''],
    startingtime: [''],
    stoptime: [''],
    busissue: [''],
    busdelete: [''],
    busfastTag: [''],
    busac: [''],
    howmanyseat: [''],
    buscheckpoints: [''],
    busstatus: [''],
    driverfirstname: [''],
    driverlastname: [''],
    driverissue: [''],
    driverlicance: [''],
    driveridentityname: [''],
    driverideantitynumber: [''],
    ttfirstname: [''],
    ttlastname: [''],
    ttissue: [''],
    ttidentitysname: [''],
    ttideantitynumber: [''],
    seat: this.fb.array([]),
    travel: this.fb.array([this.addtravel()]),
    weeks: this.fb.array([])
  });

  addAddress1() {
    this.travel.push(this.addtravel());
  }
  removeAddress1(index) {
    this.travel.removeAt(index);
  }

  addtravel() {
    return this.fb.group({
      traveluseremail: localStorage.getItem("email"),
      // travelbusnumber: [],
      travelbusfrom: ['', [Validators.required]],
      travelbusto: ['', [Validators.required]],
      travelbusfromtime: ['', [Validators.required]],
      travelbustotime: ['', [Validators.required]],
      travelbusprize: ['', [Validators.required]]
    });
  }

  get travel() {
    return <FormArray>this.addbus.get('travel');
  }


  submit(data) {
    this.addbus.value.id = this.bus.id;
    this.addbus.value.useremail = this.bus.useremail;
    this.addbus.value.busnumber = this.bus.busnumber;
    this.addbus.value.bustype = this.bus.bustype;
    this.addbus.value.bustravelFrom = this.bus.bustravelFrom;
    this.addbus.value.bustravelTo = this.bus.bustravelTo;
    this.addbus.value.startingtime = this.bus.startingtime;
    this.addbus.value.stoptime = this.bus.stoptime;
    this.addbus.value.busissue = this.bus.busissue;
    this.addbus.value.busdelete = this.bus.busdelete;
    this.addbus.value.busfastTag = this.bus.busfastTag;
    this.addbus.value.busac = this.bus.busac;
    this.addbus.value.howmanyseat = this.bus.howmanyseat;

    this.addbus.value.buscheckpoints = this.addbus.value.travel.length;

    this.addbus.value.busstatus = this.bus.busstatus;
    this.addbus.value.driverfirstname = this.bus.driverfirstname;
    this.addbus.value.driverlastname = this.bus.driverlastname;
    this.addbus.value.driverissue = this.bus.driverissue;
    this.addbus.value.driverlicance = this.bus.driverlicance;
    this.addbus.value.driveridentityname = this.bus.driveridentityname;
    this.addbus.value.driverideantitynumber = this.bus.driverideantitynumber;
    this.addbus.value.ttfirstname = this.bus.ttfirstname;
    this.addbus.value.ttlastname = this.bus.ttlastname;
    this.addbus.value.ttissue = this.bus.ttissue;
    this.addbus.value.ttidentitysname = this.bus.ttidentitysname;
    this.addbus.value.ttideantitynumber = this.bus.ttideantitynumber;
    this.addbus.value.weeks = this.bus.weeks;
    this.addbus.value.seat = this.bus.seat;

    const traveldata = this.addbus.value.travel;
    const travellen = traveldata.length;
    // console.log(this.addbus.value);
    // console.log(this.addbus.value.travel.length);
    // console.log(traveldata);
    // console.log(travellen);
    const travel11 = [];
    let i = 0;
    for (i = 0; i < travellen; i++) {
      // console.log(traveldata[i].travelbusfrom);
      travel11.push(
        {
          traveluseremail: localStorage.getItem("email"),
          travelbusnumber: this.busnumber,
          travelbusfrom: traveldata[i].travelbusfrom,
          travelbusto: traveldata[i].travelbusto,
          travelbusfromtime: traveldata[i].travelbusfromtime,
          travelbustotime: traveldata[i].travelbustotime,
          travelbusprize: traveldata[i].travelbusprize
        }
      )
    }
    // console.log(travel11);
    this.addbus.value.travel=null;
    // console.log(this.addbus.value);
    this.addbus.value.travel=travel11;
    // console.log(this.addbus.value);
    this.sec=true;
    localStorage.setItem("bus", JSON.stringify(this.addbus.value));
    this.router.navigate(['/h/profile/busprofile/busoperations/verifycheckpoints',this.id]);
  }
}
