import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  email: any;

  getdata: any;

  constructor(private router: Router,
    private service: UserServiceService,
    private fb: FormBuilder,
    private loc:Location,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.email = localStorage.getItem('email');
    this.spinner.show();
    this.getdataByemail();
  }

  getdataByemail() {
    this.service.getuserByid(this.email).subscribe((Response) => {
      // console.log(Response);
      this.getdata = Response;
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    });
  }

  newUser = this.fb.group({
    id: [''],
    firstname: [''],
    lastname: [''],
    email: [''],
    gender: ['', [Validators.required]],
    mobileno: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    description: ['', [Validators.required]],
    avatar: [''],
    password: [''],
    providedby: [''],
    userid: [''],
    whoareyou: ['', [Validators.required]],
    location: ['', [Validators.required]],
    normality: ['', [Validators.required]],
    // address: this.fb.array([this.adddesc()]),
  });

  adddesc() {
    return this.fb.group({
      addresstablestreet: ['', [Validators.required]],
      addresstablecity: ['', [Validators.required]],
      addresstablestate: ['', [Validators.required]],
      addresstablelocation: ['', [Validators.required]],
      addresstabledesc: ['', [Validators.required]]
    });
  }

  addAddress1() {
    this.address.push(this.adddesc());
  }
  removeAddress1(index) {
    this.address.removeAt(index);
  }

  get address() {
    return <FormArray>this.newUser.get('address');
  }

  getrandomdata() {
    return Math.floor(Math.random() * (99999999999 - 10000000000)) + 10000000000;
  }

  fileupload(event) {
    if (event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        // this.imagedata=event.target.result;
        this.newUser.value.avatar = event.target.result;
      }
    }
  }

  savedata() {
    this.newUser.value.id = this.getdata.id;
    this.newUser.value.email = this.getdata.email;
    this.newUser.value.password = this.getdata.password;
    this.newUser.value.providedby = this.getdata.providedby;
    this.newUser.value.userid = this.getdata.userid;
    if (this.newUser.value.firstname == '') {
      this.newUser.value.firstname = this.getdata.firstname;
    }
    if (this.newUser.value.lastname == '') {
      this.newUser.value.lastname = this.getdata.lastname;
    }
    if (this.newUser.value.gender == '') {
      this.newUser.value.gender = this.getdata.gender;
    }
    if (this.newUser.value.mobileno == '') {
      this.newUser.value.mobileno = this.getdata.mobileno;
    }
    if (this.newUser.value.description == '') {
      this.newUser.value.description = this.getdata.description;
    }
    if (this.newUser.value.avatar == '') {
      this.newUser.value.avatar = this.getdata.avatar;
    }
    if (this.newUser.value.whoareyou == '') {
      this.newUser.value.whoareyou = this.getdata.whoareyou;
    }
    if (this.newUser.value.location == '') {
      this.newUser.value.location = this.getdata.location;
    }
    if (this.newUser.value.normality == '') {
      this.newUser.value.normality = this.getdata.normality;
    }
    // console.log(this.getdata.id);
    // console.log(this.newUser.value);
    this.service.updateuser(this.newUser.value).subscribe((Response) => {
      // console.log(Response);
      this.loc.back();
    })
  }

}
