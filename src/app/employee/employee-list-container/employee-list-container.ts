import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { EmployeeService } from '../employee-service/employee.service';
import { Employee } from '../employee-model';
import { EmployeeListPresenter } from './employee-list-presenter/employee-list-presenter';


@Component({
  selector: 'app-emp-list-container',
  templateUrl: './employee-list-container.html',
  viewProviders: [EmployeeListPresenter]
})
export class EmployeeListContainer implements OnInit {
  public employees$: Observable<Employee[]>;

  constructor(
    private api: EmployeeService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    // Get all employee data from json server
    this.employees$ = this.api.getEmployees();
  }

  /**
   * Delete employee record
   * @param id In this event in come id for delete employee record
   */
  public deleteEmployee(id: number) {
    if (confirm('Do you want to delete?')) {
      this.api.deleteEmployee(id).subscribe(data =>{
        if(data){
          this.employees$ = this.api.getEmployees();
        }
        alert('Data Not deleted');
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
   * @param $event query data
   */
  public search(query: string): void {
    this.employees$ = this.api.employeeSearch(query);
  }
}
