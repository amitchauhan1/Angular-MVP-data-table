import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../emp-service/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../../Employee';

@Component({
  selector: 'app-emp-model-container',
  template: `<app-emp-model-ui
              [department]="department$ | async"
              [employee]="employee$ | async"
            ></app-emp-model-ui>
  `,
  styles: []
})
export class EmpModelContainerComponent implements OnInit {
  public department$: Observable<Object>;
  public employee$: Observable<Employee>;
  empId;
  constructor(
    private api:EmployeeService,
    private router:Router,
    private route: ActivatedRoute,
  ) {

     // get emp id from URL
     this.empId = this.route.snapshot.paramMap.get('id');
     console.log(this.empId);
     

     /**
      * Get single employee record for edit record
      */
    this.employee$ = api.getEmployee(this.empId);

    // Get Department for using in drop down box
    this.department$ = api.getDepartment();

  }

  ngOnInit() {
  }

}
