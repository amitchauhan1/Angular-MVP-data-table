import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee-service/employee.service';
import { Employee } from '../../employee-model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-list-container',
  template: `<app-emp-list-ui
            [employees]="employees$ | async"
            (deleteEmpEvent)="deleteEmployee($event)"
            (editEmpEvent)="editEmployee($event)"
            (searchQuraryEvent)="search($event)"
            ></app-emp-list-ui>
  `,
  styles: []
})
export class EmpListContainerComponent implements OnInit {
  public employees$: Observable<Employee>;
  constructor(
    private api: EmployeeService,
    private router: Router,
  ) {
    // Get all employee data from json server
    this.employees$ = this.api.getEmployees();
  }

  /**
   * Delete employee record
   * @param $event In this event in come id for delete employee record
   */
  deleteEmployee($event) {
    if (confirm('Do you want to delete?')) {
      this.api.deleteEmployee($event);
      this.employees$ = this.api.getEmployees();
    }
  }

  /**
   * Edit employee record.
   * @param $event In this event in come id for edit employee record.
   */
  editEmployee($event) {
    this.router.navigate([`employee-edit/${$event}`]);
  }

  /**
   * search data to pass in eployees$.
   * @param $event queary data
   */
  search($event) {
    this.employees$ = this.api.employeeSearch($event);
  }
  ngOnInit() {
  }
}
