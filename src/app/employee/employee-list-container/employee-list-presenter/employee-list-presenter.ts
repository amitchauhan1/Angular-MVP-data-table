import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeListPresenter {

  // For use Order
  public order: string;

  // By default reverse set
  public reverse: boolean;

  // New Order set
  public setNewOrder: string;

  constructor() {
    this.order = 'name';
    this.reverse = true;
    this.setNewOrder = 'asc';
  }

  // Change Order on click
  changeOrder(): string {
    // If Reverse true set 'asc' otherwise set 'desc'.
    if (this.reverse === true) {
      return this.setNewOrder = 'asc';
    } else {
      return this.setNewOrder = 'desc';
    }
  }

  // set order for sorting
  public setOrder(value: string): boolean | string {
    if (this.order === value) {
      return this.reverse = !this.reverse;
    }
    return this.order = value;
  }
}
