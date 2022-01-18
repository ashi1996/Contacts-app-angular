import { State } from './store-state.interace';

import { BehaviorSubject, Observable ,pluck } from "rxjs";

const state: State = {
  contacts: []
};


export class Store{

  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable()

  constructor(){}

  get value() {
    return this.subject.value;
  }

  getStore(): Observable<State> {
    return this.store;
  }

  set(name: string, state: any) {
    this.subject.next({
      ...this.value, [name]: state
    });
  }
  
  
}