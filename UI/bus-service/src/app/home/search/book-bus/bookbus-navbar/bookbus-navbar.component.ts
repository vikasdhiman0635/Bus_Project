import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-bookbus-navbar',
  templateUrl: './bookbus-navbar.component.html',
  styleUrls: ['./bookbus-navbar.component.css']
})
export class BookbusNavbarComponent implements OnInit {

  firstname:any;
  image:any;

  userdata:any;

  id:any;

  constructor(private router:Router, private service:UserServiceService) { }

  ngOnInit()
  {
    this.id=localStorage.getItem('email');
    this.userdata=JSON.parse(localStorage.getItem('userdata'));
    // if(this.id!=null)
    // {
    //   this.service.getuserByid(this.id).subscribe((Response)=>
    //   {
    //     console.log(Response);
    //     this.userdata=Response;
    //     this.firstname=this.userdata.firstname;
    //     this.image=this.userdata.avatar;
    //   });
    // }
  }

  nav(data)
  {
    if(data=='login')
    {
      this.router.navigate(['/h/login']);
    }
    if(data=='contact')
    {
      this.router.navigate(['/h/contactus']);
    }
  }

  gotoprofile()
  {
    this.router.navigate(['/h/profile']);
  }
}
