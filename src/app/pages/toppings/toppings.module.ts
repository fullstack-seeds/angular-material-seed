import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../../theme/theme.module';

import { ToppingsRoutingModule } from './toppings-routing.module';
import { ToppingsComponent } from './toppings.component';
import { ToppingsListComponent } from './toppings-list/toppings-list.component';
import { ToppingDetailComponent } from './topping-detail/topping-detail.component';
import { ToppingAddComponent } from './topping-add/topping-add.component';
import { ToppingEditComponent } from './topping-edit/topping-edit.component';


@NgModule({
  declarations: [ToppingsComponent, ToppingsListComponent, ToppingDetailComponent, ToppingAddComponent, ToppingEditComponent],
  imports: [
    CommonModule,
    ToppingsRoutingModule,
    ThemeModule
  ]
})
export class ToppingsModule { }
