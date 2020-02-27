import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Employee } from '../model/employee-model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Adapter } from '../adpater/employee-adapter';
import { HttpAdapter } from '../adpater/http-employee-adapter';

// Use for Url
const BASEURL = environment.API;

@Injectable()
export class EmployeeService {

  constructor(
    private http: HttpClient,
    private adapter: Adapter,
    private httpAdapter: HttpAdapter
  ) {
  }

  /**
   * Get all Employee data from server
   * @param field use for sorting field
   * @param order sorting field order
   * @param query search query
   */
  getEmployees(field: string, order: string, query: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${BASEURL}Employee?_sort=${field}&_order=${order}&q=${query}`).pipe(
      map((data: any[]) => data.map(employee => this.adapter.getAdapt(employee))));
  }

  /**
   * Get employee single record using id
   * @param employeeId Employee Id
   */
  getEmployee(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(`${BASEURL}Employee/${employeeId}`).pipe(
      map(employee => this.adapter.getAdapt(employee)));
  }

  /**
   * Get all Department name from server
   */
  getDepartment(): Observable<Array<string>> {
    return this.http.get<Array<string>>(`${BASEURL}department`);
  }
  /**
   * Add Employee in database
   * @param employee employee new data
   */
  addEmployee(employeeData: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${BASEURL}Employee`, employeeData).pipe(
      map((data: any) => data.map(employee => this.httpAdapter.setAdapt(employee))));
  }

  /**
   * Update Employee data
   * @param employeeId Employee Id
   * @param employee Employee updated data
   */
  updateEmployee(employeeId: number, employeeData: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${BASEURL}Employee/${employeeId}`, employeeData).pipe(
      map(employee => this.httpAdapter.setAdapt(employee)));
  }

  /**
   * Delete Employee Data
   * @param id Employee Id
   */
  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${BASEURL}Employee/${id}`);
  }
}
