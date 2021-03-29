import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BacksecurityGuard } from 'src/app/Guard/backsecurity.guard';
import { GoforwardactiveGuard } from 'src/app/Guard/goforwardactive.guard';
import { PagevalidatorGuard } from 'src/app/Guard/pagevalidator.guard';
import { AddCheckPointsComponent } from './add-check-points/add-check-points.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { VerifyBusCheckPointsComponent } from './verify-bus-check-points/verify-bus-check-points.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'updatebus', pathMatch: 'full'
  },
  {
    path:'updatebus/:id', component:UpdateBusComponent
  },
  {
    path: 'addcheckpoints/:id', component: AddCheckPointsComponent,
    // canActivate: [PagevalidatorGuard]
    // canDeactivate: [BacksecurityGuard]
  },
  {
    path:'verifycheckpoints/:id',component:VerifyBusCheckPointsComponent,
    // canActivate: [GoforwardactiveGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusworkingRoutingModule { }
