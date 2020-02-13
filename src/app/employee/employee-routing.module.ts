import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListContainer } from './employee-list-container/employee-list-container';
import { EmployeeFormContainer } from './employee-from-container/employee-form-container';

const routes: Routes = [
  {
    path: 'employee-list',
    component: EmployeeListContainer
  },
  {
    path: 'employee-add',
    component: EmployeeFormContainer
  },
  {
    path: 'employee-edit/:id',
    component: EmployeeFormContainer
  },
  {
    path: '',
    redirectTo: 'employee-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
