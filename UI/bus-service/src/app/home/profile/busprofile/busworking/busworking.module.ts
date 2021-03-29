import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusworkingRoutingModule } from './busworking-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AddCheckPointsComponent } from './add-check-points/add-check-points.component';
import { VerifyBusCheckPointsComponent } from './verify-bus-check-points/verify-bus-check-points.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AddCheckPointsComponent, 
    VerifyBusCheckPointsComponent, UpdateBusComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    BusworkingRoutingModule
  ]
})
export class BusworkingModule { }
