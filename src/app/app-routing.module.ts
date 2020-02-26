import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
  },
  {
    path: 'dynamic',
    loadChildren: () => import('./dynamic/dynamic.module').then(m => m.DynamicModule),
  },
  {
    path: '',
    redirectTo: 'employee',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
