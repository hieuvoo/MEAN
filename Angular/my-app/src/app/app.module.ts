import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { NoteComponent } from './note/note.component';
import { NoteListComponent } from './note/note-list/note-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    NoteComponent,
    NoteListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
