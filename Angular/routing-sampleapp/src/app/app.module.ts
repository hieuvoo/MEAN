import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'; // 1. from running "ng new routing-sampleapp --routing"
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { HomeTasksComponent } from './home-tasks/home-tasks.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    HomeTasksComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // 2. --routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
