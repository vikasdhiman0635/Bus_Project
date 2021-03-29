import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  {
    path:'',redirectTo:'searchbus',pathMatch:'full'
  },
  {
    path: 'searchbus', component: SearchResultComponent
  },
  {
    path:'bookbus',
    loadChildren: ()=>import('./book-bus/book-bus.module').then(m=>m.BookBusModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
