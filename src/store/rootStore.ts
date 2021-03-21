import { createContext, useContext } from "react";
import { makeAutoObservable } from "mobx";
import { Counter } from "store/counter";
import { Posts } from "store/posts.store";

export class RootStore {
  readonly counter: Counter;
  readonly todoStore: TodoStore;
  readonly posts: Posts

  constructor() {
    this.counter = new Counter(this);
    this.todoStore = new TodoStore(this);
    this.posts = new Posts(this)
  }
}

class TodoStore {
  todos = [];
  rootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }
}

export const StoreContext = createContext<RootStore>(new RootStore());
export const useRootStore = () => useContext(StoreContext);
