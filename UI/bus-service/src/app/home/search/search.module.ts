import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchNavbarComponent } from './search-navbar/search-navbar.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShortPipe } from './Pipe/short.pipe';

@NgModule({
  declarations: [
    SearchResultComponent, 
    SearchNavbarComponent, 
    ShortPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxSpinnerModule,
    FormsModule, 
    ReactiveFormsModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
