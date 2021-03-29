import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBusComponent } from './add-bus/add-bus.component';
import { BusmaincomponentComponent } from './busmaincomponent/busmaincomponent.component';
import { ShowMainBusComponent } from './show-main-bus/show-main-bus.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
  {
    path: 'main', component: BusmaincomponentComponent,
    children: [
      {
        path: 'id/:id', component: ShowMainBusComponent
      }
    ]
  },
  {
    path: "addbus", component: AddBusComponent
  },
  {
    path: "busoperations",
    loadChildren: () => import('./busworking/busworking.module').then(m => m.BusworkingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusprofileRoutingModule { }
