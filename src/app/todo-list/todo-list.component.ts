import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Todo, TodoService} from "../todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$!: Observable<Todo[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos$ = this.todoService.todos$
  }

  deleteTodo(todoId: number) {
    this.todoService.remove(todoId);
  }

}
