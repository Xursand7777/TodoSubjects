import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TodoService} from "./todo.service";

@NgModule({
  declarations: [
    AppComponent,
    TodoAddComponent,
    TodoListComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
