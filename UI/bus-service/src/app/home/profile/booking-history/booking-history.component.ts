import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/Service/payment.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  bookinghistpry:any

  constructor(private service:PaymentService) { }

  ngOnInit()
  {
    this.service.getalldata(localStorage.getItem("email")).subscribe((Response)=>
    {
      console.log(Response);
      this.bookinghistpry=Response?.book;
      console.log(this.bookinghistpry);
    })
  }

}
