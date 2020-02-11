import { Component, OnInit, Input } from '@angular/core';
import { FormArray, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/employee/emp-service/employee.service';
import { Employee } from 'src/app/employee/Employee';

@Component({
  selector: 'app-emp-model-ui',
  templateUrl: './emp-model-prasentation.html',
  styleUrls: ['./emp-model-prasentation.scss']
})
export class EmpModelComponent implements OnInit {

  public dept: object;
  public empData: any;
  // Disabled submit button
  public submitted = false;
  public empId: string;

  // Get department data from container for using on drop down.
  @Input() department: object;

  // Get employee data from container for update.
  @Input() employee: Employee;

  constructor(
    private fb: FormBuilder,
    private api: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
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

  ngOnInit() {
    console.log(this.employee);
    
    if(this.employee.id){
      this.empForm.setValue(this.employee);
    }
  }

  /**
   * Add multiple address
   */
  addNewAddress() {
    const control = this.empForm.controls.address as FormArray;
    control.push(
      this.fb.group({
        city: [''],
        zip: ['']
      })
    );
  }

  /**
   * delete existing address
   * @param index address index
   */
  deleteAddress(index) {
    const control = this.empForm.controls.address as FormArray;
    control.removeAt(index);
  }

  /**
   * Add Employee data
   * Edit Employee data
   */
  onSubmit() {
    this.submitted = true;
    if (this.empId) {
      this.api.updateEmployee(Number(this.empId), this.empForm.value);
    } else {
      this.api.addEmployee(this.empForm.value);
    }
    this.router.navigate(['emp-list']);
  }

  // instance of employee form
  get f() { return this.empForm.controls; }
}

