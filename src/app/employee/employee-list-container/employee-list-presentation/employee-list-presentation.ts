import { Component, OnInit, Input, EventEmitter, Output, DoCheck } from '@angular/core';

import { EmployeeListPresenter } from '../employee-list-presenter/employee-list-presenter';
import { Employee } from '../../employee-model';

@Component({
  selector: 'app-emp-list-ui',
  templateUrl: './employee-list-presentation.html',
  styleUrls: ['./employee-list-presentation.scss']
})
export class EmployeeListPresentation implements OnInit, DoCheck {

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
  @Output() sortFieldEvent = new EventEmitter<string>();

  /**
   * create new event for sort send order.
   */
  @Output() sortOrderEvent = new EventEmitter<string>();

  // For search text box
  public searchQuery: string;
  // Use for search query
  public query: string;
  // emit field name
  public field: string;
  // send order
  public order: string;
  // set order
  public reverse: boolean;

  constructor(
    private employeeListPresenter: EmployeeListPresenter
  ) {
    this.query = '';
    this.field = 'name';
    this.order = 'asc';
  }

  ngOnInit(): void {
    // Default init time send value of search query
    this.searchQueryEvent.emit(this.query);
    // Default init time set name of field
    this.sortFieldEvent.emit(this.field);
    // Default init time set order ascending
    this.sortOrderEvent.emit(this.employeeListPresenter.changeOrder());
  }

  ngDoCheck(): void {
    this.order = this.employeeListPresenter.order;
    this.reverse = this.employeeListPresenter.reverse;
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
  public setOrder(value: string): void {
    // Call sorting Method
    this.employeeListPresenter.setOrder(value);

    // Emit Sort value
    this.sortFieldEvent.emit(value);

    // Emit Set new order
    this.sortOrderEvent.emit(this.employeeListPresenter.changeOrder());
  }
}
