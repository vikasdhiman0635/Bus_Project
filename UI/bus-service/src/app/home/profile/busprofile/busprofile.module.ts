import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusprofileRoutingModule } from './busprofile-routing.module';
import { BusmaincomponentComponent } from './busmaincomponent/busmaincomponent.component';
import { BusNavBarComponent } from './bus-nav-bar/bus-nav-bar.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ShowMainBusComponent } from './show-main-bus/show-main-bus.component';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [BusmaincomponentComponent, BusNavBarComponent, AddBusComponent, ShowMainBusComponent],
  imports: [
    CommonModule,
    FormsModule, 
    NgxSpinnerModule,
    ReactiveFormsModule,
    HttpClientModule,
    BusprofileRoutingModule
  ]
})
export class BusprofileModule { }
