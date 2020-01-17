import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToppingsComponent } from './toppings.component';
import { ToppingsListComponent } from './toppings-list/toppings-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list' },
  { path: 'list', component: ToppingsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToppingsRoutingModule { }
