import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class TaskService {
  tasks = [];
 
  constructor(private _http: Http) { }
 
  retrieveTasks() {
    this._http.get('/tasks').subscribe( 
      (response) => { console.log(response.json()); }, // <— first method
      (error) => { console.log(error); } // <— second method
    );
  }
 
  createTask(task) {
    this.tasks.push(task);
  }
}
