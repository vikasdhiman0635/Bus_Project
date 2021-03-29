import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from "@angular/common";
import { passwordValidator } from 'src/app/shared/password-validator';
import { ForgetPasswordServiceService } from 'src/app/Service/forget-password-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  message1:any;
  message12:any;
  code:any;

  emails:any;

  message2:any;
  message3:any;

  constructor(private fb:FormBuilder, 
    private service:ForgetPasswordServiceService, 
    private toastr: ToastrService,
    private loc:Location) { }

  ngOnInit(){
  }

  firstForm=this.fb.group({
    email:['',[Validators.required,Validators.minLength(3)]]
  });

  secoundForm=this.fb.group({
    otp:['',[Validators.required,Validators.minLength(2),Validators.maxLength(4)]]
  });

  thirdForm=this.fb.group({
    email:[''],
    newpassword:['',[Validators.required,Validators.minLength(3)]],
    confirmpassword:['',[Validators.required,Validators.minLength(3)]]
  },{validator: passwordValidator});

  first()
  {
    // console.log(this.firstForm.value);
    this.emails=this.firstForm.value.email;
    // this.message1="Verify Email";
    this.service.verifyemail(this.firstForm.value).subscribe((Response)=>
    {
      this.message1=Response;
      this.message12=this.message1.message;
      this.code=this.message1.code;
      this.showmessage();
    })
  }

  secound()
  {
    if(this.code==this.secoundForm.value.otp)
    {
      this.toastr.success('Verification Successful', 'Success');
    }
    else
    {
      this.toastr.error("OTP is incorrect");
    }
  }

  third()
  {
    this.thirdForm.value.email=this.emails;
    // console.log(this.emails);
    // console.log(this.thirdForm.value);
    // this.message3="Verify Email";
    this.service.updatepassword(this.thirdForm.value).subscribe((Response)=>
    {
      // console.log(Response);
      this.message3=Response;
      this.loc.back();
    });
  }

  showmessage()
  {
    if(this.message12=="User is not exist")
    {
      // this.status=false;
      this.toastr.error(this.message12, 'Check your Email');
    }
    if(this.message12=="Mail send Successful")
    {
      // this.status=false;
      this.toastr.success('Check your mail, there have a verification code', 'Success');
    }
  }

}
