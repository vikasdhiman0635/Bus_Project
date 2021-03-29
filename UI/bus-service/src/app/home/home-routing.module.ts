import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',redirectTo:'main',pathMatch:'full'
  },
  {
    path:'main',component:HomeComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'contactus',component:ContactUsComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'forgetpassword',component:ForgetPasswordComponent
  },
  {
    path:'u/:id',component:HomeComponent
  },
  {
    path:'profile',
    loadChildren: ()=> import('./profile/profile.module').then(m=>m.ProfileModule)
  },
  {
    path:'search',
    loadChildren: ()=> import('./search/search.module').then(m=>m.SearchModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
