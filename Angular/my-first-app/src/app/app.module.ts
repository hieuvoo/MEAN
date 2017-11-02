import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { MyComponentComponent } from './my-component/my-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // include module in our appmodules
    HttpModule // include module in our appmodules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
