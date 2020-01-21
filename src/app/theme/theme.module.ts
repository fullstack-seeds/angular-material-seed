import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  MatCardModule,
  MatOptionModule,
  MatSelectModule,
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
  MatCardModule,
  MatOptionModule,
  MatSelectModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, ...MAT_MODULES],
  exports: [...COMPONENTS, FormsModule, ReactiveFormsModule, ...MAT_MODULES]
})
export class ThemeModule { }
