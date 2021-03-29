import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class URLTrackingService {

  constructor(private router:Router) { }

  checkuserexist()
  {
    
    let email='';

    email=localStorage.getItem('email');
    if(email!=null)
    {
      this.router.navigate(['/h/u',email]);
    }
    if(email==null)
    {
      this.router.navigate(['/h/main']);
    }

  }


}
