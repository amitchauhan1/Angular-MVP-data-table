import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmpListContainerComponent } from './employee-list/emp-list-container/employee-list-container';
import { EmpListPrasenetationComponent } from './employee-list/emp-list-container/emp-list-prasenetation/employee-list-prasenetation';
import { HttpClientModule } from '@angular/common/http';
import { EmpModelComponent } from './employee-form/employee-from-container/employee-form-prasentation/employee-form-prasentation';
import { EmpModelContainerComponent } from './employee-form/employee-from-container/employee-form-container';



@NgModule({
  declarations: [EmpListContainerComponent, EmpListPrasenetationComponent, EmpModelComponent, EmpModelContainerComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [EmpListContainerComponent, EmpModelContainerComponent],

})
export class EmployeeModule { }
