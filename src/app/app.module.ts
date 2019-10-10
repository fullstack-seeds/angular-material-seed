import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ThemeModule } from './theme/theme.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
