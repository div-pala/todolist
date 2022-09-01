import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Input() todoItems:Todo[]=[];
  @Output() saveEvent = new EventEmitter<Todo>();
  constructor() { }

  ngOnInit(): void {
  }
  newTaskName:string='';

  onSaveEvent(newTaskName:string): void {
    const newTask:Todo = {task:newTaskName, completed:false};
    console.log("New task name is = ", newTaskName);
    this.saveEvent.emit(newTask);
    // return newTask;
  }
}
