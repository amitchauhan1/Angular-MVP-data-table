import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Employee } from '../employee-model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

// Use for Url
const BASEURL = environment.API;

@Injectable()
export class EmployeeService {

  constructor(
    private http: HttpClient,
  ) {
  }

  /**
   * Get all Employee data from server
   * @param field use for sorting field
   * @param order sorting field order
   * @param query search query
   */
  getEmployees(field: string, order: string, query: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${BASEURL}Employee?_sort=${field}&_order=${order}&q=${query}`);
  }

  /**
   * Get employee single record using id
   * @param employeeId Employee Id
   */
  getEmployee(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(`${BASEURL}Employee/${employeeId}`);
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
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${BASEURL}Employee`, employee);
  }

  /**
   * Update Employee data
   * @param employeeId Employee Id
   * @param employee Employee updated data
   */
  updateEmployee(employeeId: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${BASEURL}Employee/${employeeId}`, employee);
  }

  /**
   * Delete Employee Data
   * @param id Employee Id
   */
  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${BASEURL}Employee/${id}`);
  }
}
