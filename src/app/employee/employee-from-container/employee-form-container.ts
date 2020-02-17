import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

import { Employee } from '../employee-model';
import { EmployeeService } from '../employee-service/employee.service';

@Component({
  selector: 'app-employee-container',
  templateUrl: '/employee-from-container.html'
})
export class EmployeeFormContainer implements OnInit {

  // Get Department data
  public department$: Observable<object>;
  // Get single Employee
  public employee$: Observable<Employee>;
  // Employee
  private employeeId: string;

  constructor(
    private api: EmployeeService,
    private location: Location,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    // get emp id from URL
    this.employeeId = this.route.snapshot.paramMap.get('id');

    /**
     * Get single employee record for edit record
     */
    if (this.employeeId) {
      this.employee$ = this.api.getEmployee(Number(this.employeeId));
    }

    // Get Department for using in drop down box
    this.department$ = this.api.getDepartment();
  }

  // Add new employee.
  public addEmployee(employeeData: Employee): void {
    this.api.addEmployee(employeeData).subscribe(() => {
      alert('Add Employee successfully');
      this.location.back();
    });
  }

  // Update employee data.
  public updateEmployee(employeeData: Employee): void {
    this.api.updateEmployee(Number(this.employeeId), employeeData).subscribe(() => {
      alert('Update Employee data successfully');
      this.location.back();
    });
  }
}
