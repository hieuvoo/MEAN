import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path: '',
  pathMatch: 'full',
  component: LandingComponent,
  children:[] // defined rules for our routing
},
{
  path: 'home/test', // domain name '/home'
  pathMatch: 'full',
  component: HomeComponent,
  children:[] 
},
{
  path: '**', // will always match if previous routes does not load
  component: PagenotfoundComponent,
  children:[] 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
