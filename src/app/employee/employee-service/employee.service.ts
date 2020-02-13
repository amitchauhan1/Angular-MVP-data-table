import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee-model';

@Injectable()
export class EmployeeService {
  private baseUrl: string;
  private setOrder: string = 'asc';
  constructor(
    private http: HttpClient,
  ) {
    this.baseUrl = environment.API;
  }

  /**
   * Get all Employee data from server
   * @param field use for sorting field
   * @param order sorting field order
   * @param query search query
   */
  getEmployees(field: string, order: string, query: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}Employee?_sort=${field}&_order=${order}&q=${query}`);
  }

  /**
   * Get employee single record using id
   * @param id Employee Id
   */
  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}Employee/${id}`);
  }

  /**
   * Get all Department name from server
   */
  getDepartment(): Observable<Array<string>> {
    return this.http.get<Array<string>>(`${this.baseUrl}department`);
  }
  /**
   * Add Employee in database
   * @param empData employee new data
   */
  addEmployee(empData: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}Employee`, empData);
  }

  /**
   * Update Employee data
   * @param empId Employee Id
   * @param empData Employee updated data
   */
  updateEmployee(empId: number, empData: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseUrl}Employee/${empId}`, empData);
  }

  /**
   * Delete Employee Data
   * @param id Employee Id
   */
  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.baseUrl}Employee/${id}`);
  }

  // /**
  //  * search employee server side
  //  * @param q quarry data
  //  */
  // employeeSearch(q: string): Observable<Employee[]> {
  //   return this.http.get<Employee[]>(`${this.baseUrl}Employee?q=${q}`);
  // }

  // employeeSort(value: string, order: boolean): Observable<Employee[]> {
  //   if (order === true) {
  //     this.setOrder = 'asc';
  //   } else {
  //     this.setOrder = 'desc';
  //   }
  //   return this.http.get<Employee[]>(`${this.baseUrl}Employee?_sort=${value}&_order=${this.setOrder}`);
  // }
}
