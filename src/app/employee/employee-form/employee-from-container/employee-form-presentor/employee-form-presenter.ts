import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFormPresentorService {
  constructor(
    private fb: FormBuilder,
  ) {

  }

  // Employee form
  empForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
    gender: ['', Validators.required],
    address: this.fb.array([
      this.fb.group({
        city: ['', Validators.required],
        zip: ['', Validators.required]
      })
    ]),
    department: ['', Validators.required],
    hiredate: ['', Validators.required],
    permanent: [false]
  });

  initaddress() {
    return this.fb.group({
      city: ['', Validators.required],
        zip: ['', Validators.required]
    });
  }

  /**
   * Add multiple address
   */
  addNewAddress() {
    const control = this.empForm.controls.address as FormArray;
    control.push(this.initaddress());
  }

  /**
   * delete existing address
   * @param index address index
   */
  deleteAddress(index) {
    const control = this.empForm.controls.address as FormArray;
    control.removeAt(index);
  }
}
