import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoItems:Todo[]=[];
  @Input() todoItem:Todo ={task: '', completed: false};
  @Output() markItemAsCompleteEvent = new EventEmitter<string>();
  @Output() markItemAsRemovedEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  markAsCompletedEvent():void{
    this.markItemAsCompleteEvent.emit(this.todoItem.task);
  }

  removedEvent():void{
    this.markItemAsRemovedEvent.emit(this.todoItem.task);
  }
}