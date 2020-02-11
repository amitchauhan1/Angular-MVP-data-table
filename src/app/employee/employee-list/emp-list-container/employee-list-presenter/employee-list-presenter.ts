import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpListPresenterService {

  order: string = 'name';
  reverse: boolean = false;

  constructor() { }
  // set order for sorting
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }
}
