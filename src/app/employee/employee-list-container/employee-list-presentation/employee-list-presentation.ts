import { Component, OnInit, Input, EventEmitter, Output, DoCheck } from '@angular/core';

import { EmployeeListPresenter } from '../employee-list-presenter/employee-list-presenter';
import { Employee, Sort } from '../../employee-model';

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
  @Output() delete: EventEmitter<number>;

  /**
   * Create Event for send emit employee id for edit
   */
  @Output() edit: EventEmitter<number>;

  /**
   * create new event for search.
   */
  @Output() searchData: EventEmitter<string>;

  /**
   * create new event for sort send data.
   */
  @Output() sortField: EventEmitter<Sort>;

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
  // Object of search
  private queryData: Sort;

  constructor(
    private employeeListPresenter: EmployeeListPresenter
  ) {
    this.edit = new EventEmitter<number>();
    this.delete = new EventEmitter<number>();
    this.searchData = new EventEmitter<string>();
    this.sortField = new EventEmitter<Sort>();

    this.query = '';
    this.field = 'name';
    this.order = 'asc';
    this.queryData = {
      field: this.field,
      order: this.order
    }
  }

  ngOnInit(): void {
    // Default init time send value of search query
    this.searchData.emit(this.query);
    // Default init time set name of field
    this.sortField.emit(this.queryData);
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
    this.delete.emit(id);
  }

  /**
   * Employee edit record from api
   * @param id Employee Id for edit
   */
  public editEmployee(id: number): void {
    this.edit.emit(id);
  }

  /**
   * search for emit event
   */
  public search(): void {
    this.searchData.emit(this.searchQuery);
  }

  /**
   * set order for sorting
   * @param fieldName Field name
   */
  public setOrder(fieldName: string): void {
    // Call sorting Method
    this.employeeListPresenter.setOrder(fieldName);

    // Create object for sort data
    this.queryData = {
      field: fieldName,
      order: this.employeeListPresenter.changeOrder()
    }
    // Emit Sort value
    this.sortField.emit(this.queryData);
  }
}
