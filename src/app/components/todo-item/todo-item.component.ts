import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoItems:Todo[]=[];
  @Output() markItemAsCompleteEvent = new EventEmitter<void>();
  @Output() markItemAsRemovedEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  completeTask(todoItem:Todo):void{
    todoItem.completed = true;
    console.log("Inside completeTask method", todoItem.completed);
  }
  
  addTask(newTaskName:Todo):void{
    console.log("Inside addTask method");
   this.todoItems.push(newTaskName);
  }

  removeTask(todoItem:Todo):void{
    let task = this.todoItems.filter(t => t.task === todoItem.task);
    console.log("Inside removeTask - task to remove is", task );
    if(task!=undefined && this.todoItems.length > 0) {      
      for(let i=0; i < this.todoItems.length ; i++){
        let matchFound = this.todoItems[i].task === todoItem.task;
        if(matchFound){
          this.todoItems.splice(i, 1);
       }
      } 
    }
  }
}