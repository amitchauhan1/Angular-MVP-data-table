import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpListContainerComponent } from './emp-list/emp-list-container/emp-list-container';
import { EmpModelContainerComponent } from './emp-model/emp-model-container/emp-model-container';

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
