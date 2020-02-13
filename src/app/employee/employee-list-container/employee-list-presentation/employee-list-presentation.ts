import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../employee-model';
import { EmployeeListPresenter } from '../employee-list-presenter/employee-list-presenter';

@Component({
  selector: 'app-emp-list-ui',
  templateUrl: './employee-list-presentation.html',
  styleUrls: ['./employee-list-presentation.scss']
})
export class EmployeeListPresentation implements OnInit {

  /**
   * Get Employees data.
   */
  @Input() employees: Employee;

  /**
   * Create Event for send emit employee id for delete
   */
  @Output() deleteEmpEvent = new EventEmitter<number>();

  /**
   * Create Event for send emit employee id for edit
   */
  @Output() editEmpEvent = new EventEmitter<number>();

  /**
   * create new event for search.
   */
  @Output() searchQueryEvent = new EventEmitter<string>();

  /**
   * create new event for sort send data.
   */
  @Output() sortQueryEvent = new EventEmitter<string>();

  /**
  * create new event for sort send order.
  */
  @Output() sortOrderEvent = new EventEmitter<string>();

  // For search text box
  public searchQuery: string;

  public order: string = 'name';
  public reverse: boolean = false;
  setNewOrder: string = 'asc';

  constructor(
    private employeeListPresenter: EmployeeListPresenter
  ) {

  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.order = this.employeeListPresenter.order;
    this.reverse = this.employeeListPresenter.reverse;
    this.setNewOrder = this.employeeListPresenter.setNewOrder;
  }

  /**
   * Employee delete from api
   * @param id Employee Id for delete
   */
  public deleteEmployee(id: number): void {
    this.deleteEmpEvent.emit(id);
  }

  /**
   * Employee edit record from api
   * @param id Employee Id for edit
   */
  public editEmployee(id: number): void {
    this.editEmpEvent.emit(id);
  }

  /**
   * search for emit event
   */
  public search(): void {
    this.searchQueryEvent.emit(this.searchQuery);
  }

  /**
   * set order for sorting
   * @param value Field name
   */
  setOrder(value: string) {
    // Call sorting Method
    this.employeeListPresenter.setOrder(value);

    //Emit Sort value
    this.sortQueryEvent.emit(value);

    //Emit Set new order
    this.sortOrderEvent.emit(this.setNewOrder);
  }
}
