import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';

const COMPONENTS = [
  SidebarComponent,
  TopnavComponent
];

const MAT_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatListModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule, ...MAT_MODULES],
  exports: [...COMPONENTS, ...MAT_MODULES]
})
export class ThemeModule { }
