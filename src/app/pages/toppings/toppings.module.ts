import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../../theme/theme.module';

import { ToppingsRoutingModule } from './toppings-routing.module';
import { ToppingsComponent } from './toppings.component';
import { ToppingsListComponent } from './toppings-list/toppings-list.component';


@NgModule({
  declarations: [ToppingsComponent, ToppingsListComponent],
  imports: [
    CommonModule,
    ToppingsRoutingModule,
    ThemeModule
  ]
})
export class ToppingsModule { }
