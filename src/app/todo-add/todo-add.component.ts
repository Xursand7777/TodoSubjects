import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Todo, TodoService} from "../todo.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  todos$!: Observable<Todo[]>;
  todoForm: FormGroup;

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder
  ) {
    this.todoForm = this.formBuilder.group({
      id: [""],
      value: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.todos$ = this.todoService.todos$;
  }

  onSubmit() {
    this.todoService.create(this.todoForm.value);
    this.todoForm.reset();
  }
}
