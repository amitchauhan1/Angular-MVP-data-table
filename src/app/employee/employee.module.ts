import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { EmployeeFormContainer } from './employee-from-container/employee-form-container';
import { EmployeeFormPresentation } from './employee-from-container/employee-form-presentation/employee-form-presentation';
import { EmployeeListContainer } from './employee-list-container/employee-list-container';
import { EmployeeListPresentation } from './employee-list-container/employee-list-presentation/employee-list-presentation';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeService } from './employee-service/employee.service';

@NgModule({
  declarations: [
    EmployeeListContainer,
    EmployeeListPresentation,
    EmployeeFormContainer,
    EmployeeFormPresentation
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],

})
export class EmployeeModule { }
