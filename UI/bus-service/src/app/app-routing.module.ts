import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path:'',redirectTo:'h',pathMatch:'full'
  },
  {
    path:'h',
    loadChildren: ()=> import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
