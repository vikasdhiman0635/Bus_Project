import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OtpsendService } from 'src/app/Service/otpsend.service';

@Component({
  selector: 'app-upi-payment',
  templateUrl: './upi-payment.component.html',
  styleUrls: ['./upi-payment.component.css']
})
export class UpiPaymentComponent implements OnInit {

  upi:any;

  alldata:any;

  constructor(private service:OtpsendService,
    private router:Router) { }

  ngOnInit()
  {
    // window.confirm("Hello");
    this.alldata=JSON.parse(localStorage.getItem("budata"));
    // console.log(this.alldata);
  }

  pays()
  {
    this.alldata.buspaymentstatus['upiid']=this.upi;
    // console.log(this.alldata);
    this.service.sendmessage(this.alldata.userid).subscribe((Response)=>
    {
      // console.log(Response);
      localStorage.setItem("budata",JSON.stringify(this.alldata));
      sessionStorage.setItem("otps",JSON.stringify(Response));
      this.router.navigate(['/h/search/bookbus/payment/otpverify']);
    });
  }

}
