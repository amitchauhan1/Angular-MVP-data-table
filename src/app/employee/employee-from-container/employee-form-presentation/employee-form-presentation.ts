import { Component, OnInit, Input, EventEmitter, Output, OnChanges, OnDestroy } from '@angular/core';
import { Employee } from 'src/app/employee/employee-model';
import { EmployeeFormPresenter } from '../employee-form-presenter/employee-form-presenter';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee-form-ui',
  templateUrl: './employee-form-presentation.html',
  styleUrls: ['./employee-form-presentation.scss'],
  viewProviders: [EmployeeFormPresenter],
})
export class EmployeeFormPresentation implements OnInit, OnChanges, OnDestroy {

  // Get department data from container for using on drop down.
  @Input() department: object;

  // Get employee data from container for update.
  @Input() employee: Employee;

  // @Input() set employee(value: Employee) {
  //   if (value) {
  //     this.empForm.patchValue(value);
  //     this.empData = value;
  //   }
  // }
  // get employee() {
  //   return this.empData;
  // }

  /**
   * Create event for update data
   */
  @Output() updateEmployeeEvent = new EventEmitter<Employee>();

  /**
   * Create event for Add new Employee
   */
  @Output() addEmployeeEvent = new EventEmitter<Employee>();

  public dept: object;
  public empData: Employee;

  // Disabled submit button
  public submitted:boolean;
  public empId: string;
  public empForm: FormGroup;

  constructor(
    private presenter: EmployeeFormPresenter,
  ) {
    this.submitted = false;
  }

  ngOnInit() {
    // Employee form use.
    this.empForm = this.presenter.getEmployeeForm();
  }

  ngOnChanges() {
    if (this.employee) {
      for (let i = 1; i < this.employee.address.length; i++) {
        this.presenter.addNewAddress(this.empForm);
      }
      this.empForm.patchValue(this.employee);
    }
  }

  public initAddress(): void {
    this.presenter.initAddress();
  }
  /**
   * Add multiple address
   */
  public addNewAddress(): void {
    this.presenter.addNewAddress(this.empForm);
  }

  /**
   * delete existing address
   * @param index address index
   */
  public deleteAddress(index): void {
    this.presenter.deleteAddress(index, this.empForm);
  }

  /**
   * Add Employee data
   * Edit Employee data
   */
  public onSubmit(): void {
    this.submitted = true;
    if (this.employee) {
      this.updateEmployeeEvent.emit(this.empForm.value);
    } else {
      this.addEmployeeEvent.emit(this.empForm.value);
    }
  }

  // instance of employee form
  get f() { return this.empForm.controls; }

  ngOnDestroy() {
    this.empForm.reset();
  }
}

