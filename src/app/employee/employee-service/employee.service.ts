import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee-model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl: string;
  constructor(
    private http: HttpClient,
  ) {
    this.baseUrl = 'http://localhost:3000/';
  }

  /**
   * Get all Employee data from server
   */
  getEmployees(): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}Employee`);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}Employee/${id}`);
  }

  /**
   * Get all Department name from server
   */
  getDepartment() {
    return this.http.get(`${this.baseUrl}department`);
  }
  /**
   * Add Employee in database
   * @param empData emoloyee new data
   */
  addEmployee(empData: object) {
    this.http.post(`${this.baseUrl}Employee`, empData).subscribe();
  }

  /**
   * Update Employee data
   * @param empId Employee Id
   * @param empData Employee updated data
   */
  updateEmployee(empId: number, empData: object) {
    this.http.put(`${this.baseUrl}Employee/${empId}`, empData).subscribe();
  }

  /**
   * Delete Employee Data
   * @param id Employee Id
   */
  deleteEmployee(id: number) {
    this.http.delete(`${this.baseUrl}Employee/${id}`).subscribe();
  }

  /**
   * search employee server side
   * @param q queary data
   */
  employeeSearch(q: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}Employee/?q=${q}`);
  }
}

