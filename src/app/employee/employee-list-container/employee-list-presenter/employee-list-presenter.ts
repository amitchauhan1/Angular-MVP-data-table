import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeListPresenter {

  order: string;
  reverse: boolean;

  constructor() {
    this.order = 'name';
    this.reverse = false;
  }
  // set order for sorting
  public setOrder(value: string):boolean|string {
    if (this.order === value) {
      return this.reverse = !this.reverse;
    }
    return this.order = value;
  }
}
