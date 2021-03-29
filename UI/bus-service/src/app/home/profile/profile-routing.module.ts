import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadmoduleGuard } from 'src/app/Guard/loadmodule.guard';
import { AddAddressComponent } from './add-address/add-address.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { BusprofileModule } from './busprofile/busprofile.module';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { MainprofileComponent } from './mainprofile/mainprofile.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {
    path:'',redirectTo:'userprofile',pathMatch:'full'
  },
  {
    path:'userprofile',component:MainprofileComponent
  },
  {
    path:'editprofile',component:EditprofileComponent
  },
  {
    path:'addAddress',component:AddAddressComponent
  },
  {
    path:'setting',component:SettingComponent
  },
  {
    path:'bookinghistory',component:BookingHistoryComponent
  },
  {
    path:"busprofile",
    loadChildren: ()=> import('./busprofile/busprofile.module').then(m=>m.BusprofileModule),
    canLoad: [LoadmoduleGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
