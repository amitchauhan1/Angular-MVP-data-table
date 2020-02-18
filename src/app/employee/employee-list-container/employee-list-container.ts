import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Employee, Sort } from '../employee-model';
import { EmployeeService } from '../employee-service/employee.service';
import { EmployeeListPresenter } from './employee-list-presenter/employee-list-presenter';


@Component({
  selector: 'app-emp-list-container',
  templateUrl: './employee-list-container.html',
  viewProviders: [EmployeeListPresenter]
})
export class EmployeeListContainer implements OnInit {

  // For get all employee data.
  public employees$: Observable<Employee[]>;

  // Search query store only
  private query: string;

  // sort default value
  private queryData: object;
  private field: string;
  private order: string;

  constructor(
    private api: EmployeeService,
    private router: Router,
  ) {
  }

  ngOnInit() {

    // Get all employee data from json server
    this.employees$ = this.api.getEmployees(this.field, this.order, this.query);
  }

  /**
   * Delete employee record
   * @param id In this event in come id for delete employee record
   */
  public deleteEmployee(id: number) {
    if (confirm('Do you want to delete?')) {
      this.api.deleteEmployee(id).subscribe(data => {
        if (data) {
          this.employees$ = this.api.getEmployees(this.field, this.order, this.query);
        }
      });
    }
  }

  /**
   * Edit employee record.
   * @param id In this event in come id for edit employee record.
   */
  public editEmployee(id: number): void {
    this.router.navigate([`employee-edit/${id}`]);
  }

  /**
   * search data to pass in employees$.
   * @param query query data for search
   */
  public search(query: string): void {
    this.employees$ = this.api.getEmployees(this.field, this.order, query);
    this.query = query;
  }

  /**
   * Sorting Fields wise
   * @param field set new field for sorting
   */
  public sort(queryData: Sort): void {
    this.field = queryData.field;
    this.order = queryData.order;
    this.employees$ = this.api.getEmployees(this.field, this.order, this.query);
  }

}
