import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../../employee-model';
import { EmployeeService } from '../../employee-service/employee.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-container',
  template: `<app-employee-form-ui
              [department]="department$ | async"
              [employee]="employee$ | async"
              (addEmployeeEvent)="addEmployee($event)"
              (updateEmployeeEvent)="updateEmployee($event)"
            ></app-employee-form-ui>
  `,
  styles: []
})
export class EmpModelContainerComponent implements OnInit {
  public department$: Observable<Object>;
  public employee$: Observable<Employee>;
  private empId: string;
  constructor(
    private api: EmployeeService,
    private location: Location,
    private route: ActivatedRoute,
  ) {

    // get emp id from URL
    this.empId = this.route.snapshot.paramMap.get('id');

    /**
     * Get single employee record for edit record
     */
    if (this.empId) {
      this.employee$ = this.api.getEmployee(Number(this.empId));
    }

    // Get Department for using in drop down box
    this.department$ = api.getDepartment();

  }

  ngOnInit() {
  }

  // Add new employee 
  addEmployee($event) {
    this.api.addEmployee($event);
    alert('Add Employee sucsessful');
    this.location.back();
  }
  updateEmployee($event) {
    this.api.updateEmployee(Number(this.empId), $event);
    alert('Update Employee sucsessful');
    this.location.back();
  }
}
