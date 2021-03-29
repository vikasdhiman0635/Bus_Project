import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BusService } from 'src/app/Service/bus.service';
import { Location } from "@angular/common";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {


  constructor(public fb:FormBuilder,
      public service: BusService,
      public troset: ToastrService,
      private loc:Location,
      private spinner: NgxSpinnerService
    ) { }

  ngOnInit()
  {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }

  addbus=this.fb.group({
    id: [this.getrandomnumber()],
    useremail: [localStorage.getItem('email')],
    busnumber: ['',[Validators.required,]],
    bustype: ['',[Validators.required]],
    bustravelFrom: ['',[Validators.required]],
    bustravelTo: ['',[Validators.required]],
    startingtime: ['',[Validators.required]],
    stoptime: ['',[Validators.required]],
    busissue: ['',[Validators.required]],
    busdelete: ['No'],
    busfastTag: ['',[Validators.required]],
    busac: ['',[Validators.required]],
    howmanyseat: ['',[Validators.required]],
    buscheckpoints: ['',[Validators.required]],
    busstatus: ['',[Validators.required]],
    driverfirstname: ['',[Validators.required]],
    driverlastname: ['',[Validators.required]],
    driverissue: ['',[Validators.required]],
    driverlicance: ['',[Validators.required]],
    driveridentityname: ['',[Validators.required]],
    driverideantitynumber: ['',[Validators.required]],
    ttfirstname: ['',[Validators.required]],
    ttlastname: ['',[Validators.required]],
    ttissue: ['',[Validators.required]],
    ttidentitysname: ['',[Validators.required]],
    ttideantitynumber: ['',[Validators.required]],
    seat: this.fb.array([]),
    weeks: this.fb.array([this.addweaks()])
  });

  addweaks()
  {
    return this.fb.group({
      weekuseremail: [localStorage.getItem("email")],
      sunday: ['', [Validators.required]],
      monday: ['', [Validators.required]],
      tuesday: ['', [Validators.required]],
      wednesday: ['', [Validators.required]],
      thuesday: ['', [Validators.required]],
      friday: ['', [Validators.required]],
      saturday: ['', [Validators.required]]
    });
  }

  get weaks() {
    return <FormArray>this.addbus.get('weeks');
  }


  submitdata()
  {
    let i; 
    for(i=0; i<this.addbus.value.howmanyseat; i++)
    {
      this.addbus.value.seat.push({
        seatnumber: i+1,
        seatstatus: false,
        busidd: localStorage.getItem("email")+this.addbus.value.id,
        useremail: null
      });
    }

    console.log(this.addbus.value);
    this.service.savedata(this.addbus.value).subscribe((Response)=>
    {
      console.log(Response);
      if(Response.message=="Bus save successful")
      {
        this.troset.success(Response.message,"Success");
        this.loc.back();
      }
      if(Response.message=="Bus is not save regarding any issue")
      {
        this.troset.error(Response.message,"Error");
        this.loc.back();
      }
      if(Response.message=="This bus us already exist")
      {
        this.troset.error(Response.message,"Error");
        this.loc.back();
      }
    });
  }
  
  checknumber()
  {
    // console.log(this.addbus.value.busnumber);
    this.service.checkbusByBusnmber(this.addbus.value.busnumber).subscribe((Response)=>
    {
      // console.log(Response);
      if(Response.check)
      {
        alert("This bus is alrady exist");
        this.addbus.reset();
      }
    });
    
  }

  getrandomnumber()
  {
    return Math.floor(Math.random() * (99999999999 - 10000000000)) + 10000000000;
  }

}
