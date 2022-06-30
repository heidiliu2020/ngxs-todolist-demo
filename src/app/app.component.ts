import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TodoItem, AddTodo } from './todos.state';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  @Select('todos.dataset') todos: Observable<TodoItem[]>;

  constructor(private store: Store) {}

  addTodo(input) {
    if (input.value == '') return;
    this.store.dispatch(new AddTodo(input.value)).subscribe((state) => {
      console.log(state);
      input.value = '';
    });
  }
}
