import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UsersService } from './services/users.service';
import { ToppingsService } from './services/toppings.service';



const DATA_SERVICES = [UsersService, ToppingsService];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    HttpClientModule,
  ],
  providers: [...DATA_SERVICES]
})
export class CoreModule { }
