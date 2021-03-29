import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookBusRoutingModule } from './book-bus-routing.module';
import { BookMainComponent } from './book-main/book-main.component';
import { BookbusNavbarComponent } from './bookbus-navbar/bookbus-navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VerifyBusSeatsComponent } from './verify-bus-seats/verify-bus-seats.component';


@NgModule({
  declarations: [BookMainComponent, BookbusNavbarComponent, VerifyBusSeatsComponent],
  imports: [
    CommonModule,
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule,
    BookBusRoutingModule
  ]
})
export class BookBusModule { }
