import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToppingsComponent } from './toppings.component';

const routes: Routes = [{ path: '', component: ToppingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToppingsRoutingModule { }
