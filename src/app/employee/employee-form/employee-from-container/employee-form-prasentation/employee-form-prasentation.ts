import { Component, OnInit, Input, EventEmitter, Output, OnChanges, OnDestroy } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Employee } from 'src/app/employee/employee-model';
import { EmployeeFormPresentorService } from '../employee-form-presentor/employee-form-presenter';

@Component({
  selector: 'app-employee-form-ui',
  templateUrl: './employee-form-prasentation.html',
  styleUrls: ['./employee-form-prasentation.scss']
})
export class EmpModelComponent implements OnInit, OnChanges, OnDestroy {

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
  @Output() addEmployeeEvent = new EventEmitter<Employee>();

  public dept: object;

  public empData: Employee;

  // Disabled submit button
  public submitted = false;
  public empId: string;


  constructor(
    private presenter: EmployeeFormPresentorService,
  ) {

  }

  // Employee form
  empForm = this.presenter.empForm;

  initaddress() {
    this.presenter.initaddress();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.employee) {
      for (let i = 1; i < this.employee.address.length; i++) {
        this.presenter.addNewAddress();
      }
      this.empForm.patchValue(this.employee);
    }
  }

  /**
   * Add multiple address
   */
  addNewAddress() {
    this.presenter.addNewAddress();
  }

  /**
   * delete existing address
   * @param index address index
   */
  deleteAddress(index) {
    this.presenter.deleteAddress(index);
  }

  /**
   * Add Employee data
   * Edit Employee data
   */
  onSubmit() {
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

