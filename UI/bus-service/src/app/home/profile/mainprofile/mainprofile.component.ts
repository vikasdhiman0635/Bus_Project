import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from 'src/app/Service/address.service';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-mainprofile',
  templateUrl: './mainprofile.component.html',
  styleUrls: ['./mainprofile.component.css']
})
export class MainprofileComponent implements OnInit {

  email:any;

  getdata:any;

  check=false;

  image:any;

  addressdata:any;

  userdata:any;

  constructor(private router:Router, 
    private service:UserServiceService, 
    private fb:FormBuilder,
    private addservice: AddressService,
    private torest:ToastrService,
    private spinner: NgxSpinnerService) { }

  ngOnInit()
  {
    this.spinner.show();
    this.email=localStorage.getItem('email');
    this.userdata=JSON.parse(localStorage.getItem('userdata'));
    // console.log(this.userdata);
    if(this.userdata.completeprofile==true)
    {
      
      this.getdataByemail();

    }
    else
    {
      this.check=false;
      this.router.navigate(["/h/profile/editprofile"]);
    }
    this.getaddressByemail();
  }

  getaddressByemail()
  {
    this.addservice.getdatabyid(this.email).subscribe((Response)=>
    {
      // console.log(Response);
      this.addressdata=Response;
    })
  }

  getdataByemail()
  {
    this.service.getuserByid(this.email).subscribe((Response)=>
    {
      // console.log(Response);
      this.getdata=Response;
      this.image=this.getdata.avatar;
      this.check=true;
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    });
  }

  editprofile()
  {
    this.router.navigate(["/h/profile/editprofile"]);
  }

  addaddress()
  {
    this.router.navigate(["/h/profile/addAddress"]);
  }

  deleteaddress(id)
  {
    // this.spinner.show();
    this.addservice.deleteaddress(id).subscribe((Response)=>
    {
      // console.log(Response);
      this.torest.success("Address Delete Successful","Success");
      this.getaddressByemail();
      window.location.reload();
    })
  }

  addbus()
  {
    this.router.navigate(['/h/profile/busprofile']);
  }

}
