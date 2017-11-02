import { TaskService } from './task.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { HttpModule } from '@angular/http'; // <— Import
@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskNewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule // <— include in imports array
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
