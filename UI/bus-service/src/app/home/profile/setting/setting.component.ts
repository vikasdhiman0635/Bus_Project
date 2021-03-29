import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ForgetPasswordServiceService } from 'src/app/Service/forget-password-service.service';
import { passwordValidator } from 'src/app/shared/password-validator';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(private _fb: FormBuilder,
    private service: ForgetPasswordServiceService,
    private loc:Location) { }

  ngOnInit(): void {
  }

  registerForm =this._fb.group({
    email: localStorage.getItem("email"),
    newpassword: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
    confirmpassword: ['',[Validators.required]]
  },{validator: passwordValidator});


  register()
  {
    console.log(this.registerForm.value);
    this.service.updatepassword(this.registerForm.value).subscribe((Response)=>
    {
      this.registerForm.reset();
      this.loc.back();
    })
  }
}
