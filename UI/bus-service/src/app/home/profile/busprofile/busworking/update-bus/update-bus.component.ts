import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BusService } from 'src/app/Service/bus.service';
import { Location } from "@angular/common";
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { TraveldataService } from 'src/app/Service/traveldata.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-update-bus',
  templateUrl: './update-bus.component.html',
  styleUrls: ['./update-bus.component.css']
})
export class UpdateBusComponent implements OnInit {

  id:any;
  bus:any;

  travess:any;

  constructor(private arouter:ActivatedRoute,
    public fb:FormBuilder,
    public service: BusService,
    public troset: ToastrService,
    private tservice: TraveldataService,
    private loc:Location,
    private spinner: NgxSpinnerService) { }

  ngOnInit()
  {
    this.spinner.show();
    this.arouter.paramMap.subscribe((params: ParamMap) => {
      let getid = parseInt(params.get('id'));
      this.id = getid;
      this.getdata();
    });
  }

  getdata() {
    this.service.getbybusnumber(this.id).subscribe((Response) => {
      this.bus = Response.bus;
      localStorage.setItem("busnumber", this.bus.busnumber);
      // console.log(this.bus)
      this.travess=this.bus.travel;
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    });
  }
  addbus=this.fb.group({
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
    weeks: this.fb.array([]),
    travel: this.fb.array([this.addtravel()]),
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
      travelbusfrom: [''],
      travelbusto: [''],
      travelbusnumber: localStorage.getItem("busnumber"),
      travelbusfromtime: [''],
      travelbustotime: [''],
      travelbusprize: ['']
    });
  }

  get travel() {
    return <FormArray>this.addbus.get('travel');
  }

  submitdata()
  {
    for(let i=1;i<this.bus.seat.length;i++)
    {
      this.addbus.value.seat=this.bus.seat;
    }
    for(let j=0;j<this.bus.weeks.length;j++)
    {
      this.addbus.value.weeks=this.bus.weeks;
    }
    let arr=[];
    let len=this.addbus.value.travel.length;
    for(let q=0;q<this.addbus.value.travel.length;q++)
    {
      arr.push(this.addbus.value.travel[q]);
    }
    for(let i=0;i<this.bus.travel.length;i++)
    {
      arr.push(this.bus.travel[i+len-1]);
    }
    this.addbus.value.travel=arr;
    if(this.addbus.value.id=='')
    {
      this.addbus.value.id=this.bus.id;
    }
    if(this.addbus.value.useremail=='')
    {
      this.addbus.value.useremail=this.bus.useremail;
    }
    if(this.addbus.value.busnumber=='')
    {
      this.addbus.value.busnumber=this.bus.busnumber;
    }
    if(this.addbus.value.bustype=='')
    {
      this.addbus.value.bustype=this.bus.bustype;
    }
    if(this.addbus.value.bustravelFrom=='')
    {
      this.addbus.value.bustravelFrom=this.bus.bustravelFrom;
    }
    if(this.addbus.value.bustravelTo=='')
    {
      this.addbus.value.bustravelTo=this.bus.bustravelTo;
    }
    if(this.addbus.value.startingtime=='')
    {
      this.addbus.value.startingtime=this.bus.startingtime;
    }
    if(this.addbus.value.stoptime=='')
    {
      this.addbus.value.stoptime=this.bus.stoptime;
    }
    if(this.addbus.value.busissue=='')
    {
      this.addbus.value.busissue=this.bus.busissue;
    }
    if(this.addbus.value.busdelete=='')
    {
      this.addbus.value.busdelete=this.bus.busdelete;
    }
    if(this.addbus.value.busfastTag=='')
    {
      this.addbus.value.busfastTag=this.bus.busfastTag;
    }
    if(this.addbus.value.busac=='')
    {
      this.addbus.value.busac=this.bus.busac;
    }
    if(this.addbus.value.howmanyseat=='')
    {
      this.addbus.value.howmanyseat=this.bus.howmanyseat;
    }
    if(this.addbus.value.buscheckpoints=='')
    {
      this.addbus.value.buscheckpoints=arr.length;
    }
    if(this.addbus.value.busstatus=='')
    {
      this.addbus.value.busstatus=this.bus.busstatus;
    }
    if(this.addbus.value.driverfirstname=='')
    {
      this.addbus.value.driverfirstname=this.bus.driverfirstname;
    }
    if(this.addbus.value.driverlastname=='')
    {
      this.addbus.value.driverlastname=this.bus.driverlastname;
    }
    if(this.addbus.value.driverissue=='')
    {
      this.addbus.value.driverissue=this.bus.driverissue;
    }
    if(this.addbus.value.driverlicance=='')
    {
      this.addbus.value.driverlicance=this.bus.driverlicance;
    }
    if(this.addbus.value.driveridentityname=='')
    {
      this.addbus.value.driveridentityname=this.bus.driveridentityname;
    }
    if(this.addbus.value.driverideantitynumber=='')
    {
      this.addbus.value.driverideantitynumber=this.bus.driverideantitynumber;
    }
    if(this.addbus.value.ttfirstname=='')
    {
      this.addbus.value.ttfirstname=this.bus.ttfirstname;
    }
    if(this.addbus.value.ttlastname=='')
    {
      this.addbus.value.ttlastname=this.bus.ttlastname;
    }
    if(this.addbus.value.ttissue=='')
    {
      this.addbus.value.ttissue=this.bus.ttissue;
    }
    if(this.addbus.value.ttidentitysname=='')
    {
      this.addbus.value.ttidentitysname=this.bus.ttidentitysname;
    }
    if(this.addbus.value.ttideantitynumber=='')
    {
      this.addbus.value.ttideantitynumber=this.bus.ttideantitynumber;
    }
    // console.log(this.addbus.value);

    this.service.updatebus(this.addbus.value).subscribe((Response)=>
    {
      // console.log(Response);
      if(Response.message="Update bus")
      {
        this.troset.success(Response.message,"Success");
        localStorage.removeItem("busnumber");
        this.loc.back();
      }
      if(Response.message="Bus is not exist")
      {
        this.troset.error(Response.message,"Error");
      }
      if(Response.message="Bus is not update")
      {
        this.troset.error(Response.message,"Not Working");
      }
    })
  }

  deletestop(id)
  {
    this.tservice.deletedata(id).subscribe((Response)=>
    {
      // console.log(Response);
      this.getdata();
    })
  }

}
