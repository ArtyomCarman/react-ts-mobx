import { makeAutoObservable } from "mobx";
import { RootStore } from "store/rootStore";

type count = 1 | 2

export class Counter {
  private _count: count = 1;
  private readonly _root: RootStore;

  constructor(root: RootStore) {
    this._root = root;
    makeAutoObservable(this);
  }

  public get count(): number {
    return this._count;
  }

  public increaseCountBy(value: count) {
    this._count += value;
  }
}
