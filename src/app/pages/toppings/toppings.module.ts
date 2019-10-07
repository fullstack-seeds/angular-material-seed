import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToppingsRoutingModule } from './toppings-routing.module';
import { ToppingsComponent } from './toppings.component';


@NgModule({
  declarations: [ToppingsComponent],
  imports: [
    CommonModule,
    ToppingsRoutingModule
  ]
})
export class ToppingsModule { }
