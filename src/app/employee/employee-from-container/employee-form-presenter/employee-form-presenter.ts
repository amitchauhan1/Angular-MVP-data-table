import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';

@Injectable()
export class EmployeeFormPresenter {
  constructor(
    private fb: FormBuilder,
  ) {

  }

  // Init One Address field At time
  public initAddress(): FormGroup {
    return this.fb.group({
      city: ['', Validators.required],
      zip: ['', Validators.required]
    });
  }
  // Employee form
  public getEmployeeForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      gender: ['', Validators.required],
      address: this.fb.array([this.initAddress()]),
      department: ['', Validators.required],
      hiredate: ['', Validators.required],
      permanent: [false]
    });
  }

  /**
   * Add multiple address
   * @param empForm Employee Form
   */
  public addNewAddress(empForm: FormGroup): void {
    const control = empForm.controls.address as FormArray;
    control.push(this.initAddress());
  }

  /**
   * delete existing address
   * @param index address index
   * @param empForm Employee Form
   */
  public deleteAddress(index: number, empForm: FormGroup): void {
    const control = empForm.controls.address as FormArray;
    control.removeAt(index);
  }
}
