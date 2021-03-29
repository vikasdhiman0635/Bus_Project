import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message:any;
  user: SocialUser;
  email:any;

  status:boolean=false;

  loginsession:any;

  constructor(private router:Router,
    private toastr: ToastrService,
    private fb:FormBuilder, 
    private service:UserServiceService,
    private authService: SocialAuthService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.email=user.email;
      this.checkloginemail();
    });
  }

  loginForm=this.fb.group({
    email: ['',[Validators.required]],
    password: ['',[Validators.required]]
  });

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  register()
  {
    this.router.navigate(['/h/register']);
  }

  login()
  {
    this.spinner.show();
    // this.status=true;
    // console.log(this.loginForm.value);
    this.service.login(this.loginForm.value).subscribe((Response)=>
    {
      // console.log(Response);
      this.loginsession=Response;
      let id=this.loginsession.userid;
      this.message=this.loginsession.message;
      this.email=this.loginsession.email;
      this.checkmessage();
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
      // console.log(this.loginsession,id,this.message,this.email);
    });
  }

  checkloginemail()
  {
    // console.log(this.user);
    this.spinner.show();
    // this.status=true;
    this.service.loginsoc(this.user).subscribe((Response)=>
    {
      // console.log(Response);
      this.loginsession=Response;
      this.message=this.loginsession.message;
      this.email=this.loginsession.email;
      this.checkmessage();
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
      // console.log(this.loginsession,this.message,this.email);
    });
  }

  forget()
  {
    this.router.navigate(['/h/forgetpassword']);
  }

  checkmessage()
  {
    if(this.message=="Password is Incorrect")
    {
      this.status=false;
      this.toastr.error(this.message, 'Check your password');
    }
    if(this.message=="User exist")
    {
      this.status=false;
      this.toastr.success('Login Successfull', 'Success');
      localStorage.setItem('userdata', JSON.stringify(this.loginsession.user));
      localStorage.setItem('email',this.email);
      this.router.navigate(['/h/u',this.email]);
    }
    if(this.message=="User is not exist")
    {
      this.status=false;
      this.toastr.error(this.message, 'Please Register');
    }
  }

}
