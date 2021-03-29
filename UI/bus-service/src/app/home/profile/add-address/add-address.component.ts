import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/Service/address.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  id:any;

  rForm: FormGroup;

  allcat:any;

  constructor(private fb: FormBuilder, 
    private router:Router, private service:AddressService,
    private loc: Location,
    private torest:ToastrService,
    private spinner: NgxSpinnerService) { }

  ngOnInit()
  {
    this.id=localStorage.getItem('email');

    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.rForm=this.fb.group(
      {
        "category":this.fb.array([this.addcat()])
      }
    );
  }

  addAddress1() {
    this.category.push(this.addcat());
  }
  removeAddress1(index) {
    this.category.removeAt(index);
  }

  addcat() {
    return this.fb.group({
      useraddressid: this.id,
      addresstablestreet: ['', [Validators.required]],
      addresstablecity: ['', [Validators.required]],
      addresstablestate: ['', [Validators.required]],
      addresstablelocation: ['', [Validators.required]],
      addresstabledesc: ['', [Validators.required]]
    });
  }

  get category() {
    return <FormArray>this.rForm.get('category');
  }

  addpost(data)
  {
    let form=this.rForm.value;
    // console.log(form.category);
    this.service.savedata(form.category).subscribe((Response)=>
    {
      // console.log(Response);
      let result=Response;
      if(result.message=="Save Address")
      {
        this.torest.success(result.message,"Success")
        this.loc.back();
      }
      if(result.message=="Their have no address")
      {
        this.torest.error(result.message,"Error")
      }
    })
  }
}
