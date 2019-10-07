import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: '', component: PagesComponent }, 
  { path: 'toppings', loadChildren: () => import('./toppings/toppings.module').then(m => m.ToppingsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
