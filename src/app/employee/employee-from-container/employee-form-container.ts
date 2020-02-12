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
  public department$: Observable<Object>;
  public employee$: Observable<Employee>;
  private empId: string;

  constructor(
    private api: EmployeeService,
    private location: Location,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    // get emp id from URL
    this.empId = this.route.snapshot.paramMap.get('id');

    /**
     * Get single employee record for edit record
     */
    if (this.empId) {
      this.employee$ = this.api.getEmployee(Number(this.empId));
    }

    // Get Department for using in drop down box
    this.department$ = this.api.getDepartment();
  }

  // Add new employee 
  public addEmployee(employeeData: Employee): void {
    this.api.addEmployee(employeeData).subscribe(data => {
      if (data) {
        alert('Add Employee successfully');
        this.location.back();
      } else {
        alert('Unsuccessfully Add Employee');
      }
    });
  }
  public updateEmployee(employeeData: Employee): void {
    this.api.updateEmployee(Number(this.empId), employeeData).subscribe(data => {
      if (data) {
        alert('Add Employee successfully');
        this.location.back();
      } else {
        alert('Unsuccessfully Add Employee');
      }
    });
  }
}
