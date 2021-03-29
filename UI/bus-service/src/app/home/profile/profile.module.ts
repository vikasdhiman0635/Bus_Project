import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { MainprofileComponent } from './mainprofile/mainprofile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { SettingComponent } from './setting/setting.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';

@NgModule({
  declarations: [MainprofileComponent, NavBarComponent, EditprofileComponent, AddAddressComponent, SettingComponent, BookingHistoryComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
