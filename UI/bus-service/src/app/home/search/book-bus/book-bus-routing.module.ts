import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookMainComponent } from './book-main/book-main.component';
import { VerifyBusSeatsComponent } from './verify-bus-seats/verify-bus-seats.component';

const routes: Routes = [
  {
    path:'',redirectTo:"bookbusmain",pathMatch:'full'
  },
  {
    path:'bookbusmain',component:BookMainComponent
  },
  {
    path:'verifybill',component:VerifyBusSeatsComponent
  },
  {
    path:'payment',
    loadChildren: ()=>import('./payment/payment.module').then(m=>m.PaymentModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookBusRoutingModule { }
