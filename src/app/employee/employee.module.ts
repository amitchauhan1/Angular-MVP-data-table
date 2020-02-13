import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { EmployeeService } from './employee-service/employee.service';
import { EmployeeListContainer } from './employee-list-container/employee-list-container';
import { EmployeeFormContainer } from './employee-from-container/employee-form-container';
import { EmployeeListPresentation } from './employee-list-container/employee-list-presentation/employee-list-presentation';
import { EmployeeFormPresentation } from './employee-from-container/employee-form-presentation/employee-form-presentation';



@NgModule({
  declarations: [EmployeeListContainer, EmployeeListPresentation, EmployeeFormContainer, EmployeeFormPresentation],
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
