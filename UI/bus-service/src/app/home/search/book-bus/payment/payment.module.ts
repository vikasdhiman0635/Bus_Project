import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { UpiPaymentComponent } from './upi-payment/upi-payment.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OptverifyComponent } from './optverify/optverify.component';
import { ResultsetComponent } from './resultset/resultset.component';
import { ResultnavbarComponent } from './resultnavbar/resultnavbar.component';

@NgModule({
  declarations: [UpiPaymentComponent, OptverifyComponent, ResultsetComponent, ResultnavbarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
