import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpListContainerComponent } from './employee-list/emp-list-container/employee-list-container';
import { EmpModelContainerComponent } from './employee-form/employee-from-container/employee-form-container';

const routes: Routes = [
  {
    path:'employee-list',
    component:EmpListContainerComponent
  },
  {
    path:'employee-add',
    component:EmpModelContainerComponent
  },
  {
    path:'employee-edit/:id',
    component:EmpModelContainerComponent
  },
  {
    path:'',
    redirectTo:'employee-list',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
