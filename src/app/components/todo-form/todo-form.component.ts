import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Input() todoItems:Todo[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  defaultValue:boolean=false;

  addTask(task:string):void{
   // this.todoItems.push(task, this.defaultValue);
  }
}
