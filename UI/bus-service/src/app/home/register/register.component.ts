import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { passwordValidator } from 'src/app/shared/password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  cpassword:any;
  // password:any;

  user: SocialUser;
  email:any;

  res:any;

  constructor(private _fb: FormBuilder,
    private authService: SocialAuthService,
    private router:Router,
    private service:UserServiceService,
    private spinner: NgxSpinnerService) { }

  ngOnInit()
  {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
    this.authService.authState.subscribe(user => {
      // console.log(user);
      this.user = user;
      this.email=user.email;
      this.checkloginemail();
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  registerForm =this._fb.group({
    firstname: ['',[Validators.required]],
    lastname: ['',[Validators.required]],
    email: ['',[Validators.required]],
    newpassword: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
    confirmpassword: ['',[Validators.required]],
    completeprofile: [false]
  },{validator: passwordValidator});

  checkloginemail()
  {
    // console.log(this.user);
    this.spinner.show();
    // localStorage.setItem("user",JSON.stringify(this.user))
    // this.router.navigate(['/']);
    this.service.registerbysocial(this.user).subscribe((Response)=>
    {
      console.log(Response);
      this.res=Response;
      let id=this.res.email;
      localStorage.setItem('email',this.res.email);
      localStorage.setItem('userdata',JSON.stringify(this.res.user));
      this.router.navigate(['/h/u',id]);
      setTimeout(() => {
        this.spinner.hide();
      }, 500);
    });
  }

  register()
  {
    // console.log(this.registerForm.value);
    this.spinner.show();
    this.service.saveuser(this.registerForm.value).subscribe((Response)=>
    {
      // console.log(Response);
      this.res=Response;
      let id=this.res.email;
      localStorage.setItem('email',this.res.email);
      localStorage.setItem('userdata',JSON.stringify(this.res.user));
      this.router.navigate(['/h/u',id]);
      setTimeout(() => {
        this.spinner.hide();
      }, 500);
    })
  }

}
