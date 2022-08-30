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
                     
  constructor() { }

  ngOnInit(): void {
  }

}
