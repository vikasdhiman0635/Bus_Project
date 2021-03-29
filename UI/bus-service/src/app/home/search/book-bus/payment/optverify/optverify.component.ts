import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CheckBackSecurity } from 'src/app/Interface/check-back-security';
import { OrderpaymentsService } from 'src/app/Service/orderpayments.service';

@Component({
  selector: 'app-optverify',
  templateUrl: './optverify.component.html',
  styleUrls: ['./optverify.component.css']
})
export class OptverifyComponent implements OnInit, CheckBackSecurity 
{

  otp:any;

  isDurity=true;

  payment:any;
  alldata:any;

  constructor(private torest: ToastrService,
    private service:OrderpaymentsService,
    private router:Router) { }
    
  canDeactivate():boolean{
    return !this.isDurity;
  }

  ngOnInit()
  {
    this.payment=JSON.parse(sessionStorage.getItem("otps"));
    this.alldata=JSON.parse(localStorage.getItem("budata"));
    // console.log(this.payment);
    // console.log(this.alldata);
    // sessionStorage.clear();
    // localStorage.removeItem("budata");
  }


  verify()
  {
    // this.isDurity=true;
    if(this.otp==this.payment.otp)
    {
      this.torest.success("Valid OTP");
      this.alldata.buspaymentstatus.howmuchpay=this.alldata.buspaymentstatus.howmuchmoney;
      this.alldata.buspaymentstatus.paymentstatus="Success";
      // console.log(this.alldata);
      this.service.saveorder(this.alldata).subscribe((Response)=>
      {
        // console.log(Response);
        localStorage.setItem("order",JSON.stringify(Response.user));
        this.router.navigate(['/h/search/bookbus/payment/order']);
      })
    }
    if(this.otp!=this.payment.otp)
    {
      this.torest.error("invalid OTP");
    }
  }
}
