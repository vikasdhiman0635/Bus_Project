import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BacksecurityGuard } from 'src/app/Guard/backsecurity.guard';
import { ReloadGuard } from 'src/app/Guard/reload.guard';
import { OptverifyComponent } from './optverify/optverify.component';
import { ResultsetComponent } from './resultset/resultset.component';
import { UpiPaymentComponent } from './upi-payment/upi-payment.component';

const routes: Routes = [
  {
    path:'',redirectTo:'seatpay',pathMatch:'full'
  },
  {
    path:'seatpay',component:UpiPaymentComponent
  },
  {
    path:'otpverify',component:OptverifyComponent,
    canDeactivate: [BacksecurityGuard]
  },
  {
    path:'order',component:ResultsetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
