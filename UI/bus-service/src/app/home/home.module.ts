import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchWhereComponent } from './search-where/search-where.component';
import { ContactComponent } from './contact/contact.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { RouterModule } from "@angular/router";
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SorterPipe } from './Pipe/sorter.pipe';
import { NgxSpinnerModule } from "ngx-spinner";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeamComponent } from './team/team.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [HomeComponent, 
    NavBarComponent, 
    SearchWhereComponent, 
    ContactComponent, 
    ContactUsComponent, 
    ForgetPasswordComponent, 
    LoginComponent, 
    RegisterComponent, 
    SorterPipe, PageNotFoundComponent, TeamComponent, ServiceComponent, AboutComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
