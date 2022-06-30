import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { ApiService } from './api.service';

export class AddTodo {
  static type = 'AddTodo';
  payload: TodoItem;
  constructor(name: string) {
    this.payload = new TodoItem(name);
  }
}

export class TodoItem {
  constructor(public content: string) {}
}

export interface TodosStateModel {
  dataset: TodoItem[];
}

@State<TodosStateModel>({
  name: 'todos',
  defaults: {
    dataset: [new TodoItem('This is Ngxs Demo!!')],
  },
})
@Injectable()
export class TodosState {
  constructor(private apiService: ApiService) {} // 可注入 service，如：呼叫 API
  @Action(AddTodo) // 定義 action 名稱
  addTodo(
    { getState, setState }: StateContext<TodosStateModel>,
    { payload }: AddTodo
  ) {
    return this.apiService.someApiCall().pipe(
      tap((_) => {
        const state = getState(); // 取得目前 state 值
        setState({
          // 重新設定 state 值
          ...state,
          dataset: [...state.dataset, payload],
        });
      })
    );
  }
}
