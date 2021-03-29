import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { URLTrackingService } from 'src/app/Service/url-tracking.service';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id:any;

  email:any;

  constructor(private aroute:ActivatedRoute, private service:UserServiceService,private router:Router,
    private urlservice:URLTrackingService,
    private spinner: NgxSpinnerService
    ) { 
    this.id=parseInt(this.aroute.snapshot.paramMap.get('id'));
  }

  ngOnInit()
  {
    this.urlservice.checkuserexist();
    this.spinner.show();
 
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

}
