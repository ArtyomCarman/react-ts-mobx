import { makeAutoObservable, runInAction } from "mobx";
import { RootStore } from "store/rootStore";
import { ListType, ListItemType, ErrorType } from "store/posts.types";
import { fetchPosts } from "store/posts.api";

export class Posts {
  private _list: ListType = [];
  private _error: ErrorType = null;
  private _isLoading: boolean = false;
  private readonly _root: RootStore;

  constructor(root: RootStore) {
    this._root = root;
    makeAutoObservable(this);
  }

  public get list() {
    return this._list;
  }

  public get isLoading() {
    return this._isLoading;
  }

  public async getPosts() {
    try {
      this._isLoading = true;
      const data = await fetchPosts(this._root.counter.count)
      runInAction(() => (this._list = data));
    } catch (error) {
      runInAction(() => (this._error = error));
    } finally {
      runInAction(() => (this._isLoading = false));
    }
  }

  public addNewPost(value: ListItemType): void {
    this._list.push(value);
  }
}
