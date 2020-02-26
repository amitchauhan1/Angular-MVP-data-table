import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeFormContainer } from './employee-from-container/employee-form-container';
import { EmployeeListContainer } from './employee-list-container/employee-list-container';

const routes: Routes = [
  {
    path: 'list',
    component: EmployeeListContainer
  },
  {
    path: 'add',
    component: EmployeeFormContainer
  },
  {
    path: 'edit/:id',
    component: EmployeeFormContainer
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
