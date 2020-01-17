import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToppingsComponent } from './toppings.component';
import { ToppingsListComponent } from './toppings-list/toppings-list.component';
import { ToppingDetailComponent } from './topping-detail/topping-detail.component';
import { ToppingAddComponent } from './topping-add/topping-add.component';
import { ToppingEditComponent } from './topping-edit/topping-edit.component';

const routes: Routes = [
  { path: '', component: ToppingsComponent, children: [
    // { path: '', redirectTo: 'list'},
    { path: '', component: ToppingsListComponent },
    { path: 'list/:id', component: ToppingDetailComponent },
    { path: 'add', component: ToppingAddComponent },
    { path: 'edit/:id', component: ToppingEditComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToppingsRoutingModule { }
