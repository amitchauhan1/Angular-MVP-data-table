import { Component, OnInit, Input, EventEmitter, Output, OnChanges, OnDestroy } from '@angular/core';
import { Employee } from 'src/app/employee/employee-model';
import { EmployeeFormPresenter } from '../employee-form-presenter/employee-form-presenter';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-employee-form-ui',
  templateUrl: './employee-form-presentation.html',
  styleUrls: ['./employee-form-presentation.scss'],
  viewProviders: [EmployeeFormPresenter],
})
export class EmployeeFormPresentation implements OnInit, OnDestroy {

  // Get department data from container for using on drop down.
  @Input() department: object;

  // Get employee data from container for update.
  @Input() set employee(value: Employee) {
    if (value) {
      this.employeeData = value;
      if (this.employeeData) {
        for (let i = 1; i < this.employeeData.address.length; i++) {
          this.employeeFormPresenter.addNewAddress(this.employeeForm);
        }
        this.employeeForm.patchValue(this.employeeData);
      }
    }
  }
  get employee(): Employee {
    return this.employeeData;
  }

  /**
   * Create event for update data
   */
  @Output() updateEmployee: EventEmitter<Employee>;

  /**
   * Create event for Add new Employee
   */
  @Output() addEmployee: EventEmitter<Employee>;

  public employeeData: Employee;

  // Disabled submit button
  public employeeForm: FormGroup;

  constructor(
    private employeeFormPresenter: EmployeeFormPresenter,
  ) {
    this.updateEmployee = new EventEmitter<Employee>();
    this.addEmployee = new EventEmitter<Employee>();
  }

  ngOnInit(): void {
    // Employee form use.
    this.employeeForm = this.employeeFormPresenter.getEmployeeForm();
  }

  public initAddress(): void {
    this.employeeFormPresenter.initAddress();
  }
  /**
   * Add multiple address
   */
  public addNewAddress(): void {
    this.employeeFormPresenter.addNewAddress(this.employeeForm);
  }

  /**
   * delete existing address
   * @param index address index
   */
  public deleteAddress(index: number): void {
    this.employeeFormPresenter.deleteAddress(index, this.employeeForm);
  }

  /**
   * Add Employee data
   * Edit Employee data
   */
  public onSubmit(): void {
    if (this.employee) {
      this.updateEmployee.emit(this.employeeForm.value);
    } else {
      this.addEmployee.emit(this.employeeForm.value);
    }
  }

  // instance of employee form
  get f() { return this.employeeForm.controls; }

  // address of instance
  get add(): FormArray { return this.employeeForm.get('address') as FormArray; }

  ngOnDestroy() {
    this.employeeForm.reset();
  }
}

