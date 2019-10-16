import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersService } from './services/users.service';



const DATA_SERVICES = [UsersService]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [...DATA_SERVICES]
})
export class CoreModule { }
