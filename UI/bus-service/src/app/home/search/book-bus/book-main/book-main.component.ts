import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusService } from 'src/app/Service/bus.service';
import { SeatsService } from 'src/app/Service/seats.service';
import { TraveldataService } from 'src/app/Service/traveldata.service';

@Component({
  selector: 'app-book-main',
  templateUrl: './book-main.component.html',
  styleUrls: ['./book-main.component.css']
})
export class BookMainComponent implements OnInit {

  travelid:any;

  traveldata:any;

  busdata:any;

  seats:any;

  user:any;

  constructor(private service: TraveldataService, 
    private buservive:BusService,
    private fb:FormBuilder,
    private seatsservice: SeatsService,
    private router: Router) { }

  ngOnInit()
  {
    this.user=localStorage.getItem("email");
    this.travelid=localStorage.getItem("travelid");
    // console.log(this.travelid);
    this.service.getdatabyid(this.travelid).subscribe((Response)=>
    {
      // console.log(Response);
      this.traveldata=Response;
      this.getbusbyBusnumber();
    });
  }

  checkbookseats() {
    let user = this.busdata.useremail + "" + this.busdata.id;
    this.seatsservice.checkseats(user).subscribe((Response) => {
      // console.log(Response);
      this.seats = Response;
      // setTimeout(() => {
      //   this.spinner.hide();
      // }, 1000);
    });
  }

  nestedForm = this.fb.group({
      busseatnolist: this.fb.array([this.adddesc()]),
    });

  adddesc() {
    return this.fb.group({
      userbusseatnolistid: this.getrandomdata(),
      busseatname: [null, Validators.required],
      busseatage: [null, Validators.required],
      busseataddharno: [null, Validators.required],
      userid: localStorage.getItem("email")
    });
  }

  setbusid()
  {
    return this.busdata.id;
  }

  addAddress1() {
    this.busseatnolist.push(this.adddesc());
  }
  removeAddress1(index) {
    this.busseatnolist.removeAt(index);
  }

  get busseatnolist() {
    return <FormArray>this.nestedForm.get('busseatnolist');
  }

  getrandomdata()
  {
    return Math.floor(Math.random() * (99999999999 - 10000000000)) + 10000000000;
  }

  getbusbyBusnumber()
  {
    // console.log(this.traveldata.travelbusnumber);
    this.buservive.getbusbybusnumber(this.traveldata.travelbusnumber).subscribe((Response)=>
    {
      // console.log(Response);
      this.busdata=Response;
      this.checkbookseats();
    });
  }

  submit(data)
  {
    // console.log(this.traveldata.travelbusprize);
    let total= this.traveldata.travelbusprize*data.value.busseatnolist.length;
    let form={
      userbusbookingid: this.getrandomdata(),
      userid: localStorage.getItem("email"),
      totalnoofseats: data.value.busseatnolist.length,
      busid : this.busdata.id,
      busseatnolist: data.value.busseatnolist,
      busdata: {
        userbusdatadestilsid: this.getrandomdata(),
        userid: localStorage.getItem("email"),
        busid: this.busdata.id
      },
      buspaymentstatus: {
        userbuspaymentstatusid: this.getrandomdata(),
        userid:localStorage.getItem("email"),
        busid: this.busdata.id,
        paymentstatus: "",
        howmuchmoney: total,
        howmuchpay: "",
        upiid: "",
      }
    }
    // console.log(form);
    localStorage.setItem("budata",JSON.stringify(form));
    this.router.navigate(["/h/search/bookbus/verifybill"]);
  }

}
