import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmpListContainerComponent } from './emp-list/emp-list-container/emp-list-container';
import { EmpListPrasenetationComponent } from './emp-list/emp-list-container/emp-list-prasenetation/emp-list-prasenetation';
import { HttpClientModule } from '@angular/common/http';
import { EmpModelComponent } from './emp-model/emp-model-container/emp-model-prasentation/emp-model-prasentation';
import { EmpModelContainerComponent } from './emp-model/emp-model-container/emp-model-container';



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
