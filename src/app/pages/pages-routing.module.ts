import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      { path: 'todo', component: TodoComponent },
      { path: 'toppings', loadChildren: () => import('./toppings/toppings.module').then(m => m.ToppingsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
