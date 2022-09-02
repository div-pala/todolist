import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoItems:Todo[] = [ {task:'Cook', completed:false},
                       {task:'Fold Clothes', completed:true},
                       {task:'Organize dresser', completed:false}
                     ]
  completedTodos: Todo[] = [];
  constructor() { }

  ngOnInit(): void {  }  

  addTask(newTaskName:Todo):void{
    console.log("Inside addTask method");
   this.todoItems.push(newTaskName);
  }

  completeTask(todoItemName:string, i: number):void{
    let completedItem = {task:todoItemName, completed:true};
    console.log("Inside completeTask method", completedItem.completed);
    this.todoItems[i]=completedItem;
  }

  removeTask(todoItemName:string):void{
    console.log("Inside removeTask - task to remove is", todoItemName );
    if(this.todoItems.length > 0) {      
      for(let i=0; i < this.todoItems.length ; i++){
        let matchFound = this.todoItems[i].task === todoItemName;
        if(matchFound){
          this.todoItems.splice(i, 1);
       }
      } 
    }
  }
}
