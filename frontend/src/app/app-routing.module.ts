import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlistComponent } from './alist/alist.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [

  { path: 'alist', component:AlistComponent },
  { path: 'details', component:DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AlistComponent, DetailsComponent]
