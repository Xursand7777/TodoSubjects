import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

export interface Todo {
  id: number;
  value: string;
}

@Injectable()
export class TodoService {
  private _todo$ = new BehaviorSubject<Todo[]>([]);
  readonly todos$ = this._todo$.asObservable(); // зачем тут asObservable

  public todos: Todo[] = [];
  public nextId = 1;

  constructor() {}

  load() {
    //Load from Database
  }

  create(item: Todo) {
    item.id = this.nextId++;

    //Update database
    this.todos.push(item);
    this._todo$.next(Object.assign([], this.todos));
  }

  remove(id: number) {
    this.todos.forEach((t, i) => {
      if (t.id === id) {
        this.todos.splice(i, 1);
      }
      this._todo$.next(Object.assign([], this.todos));
    });
  }
}
