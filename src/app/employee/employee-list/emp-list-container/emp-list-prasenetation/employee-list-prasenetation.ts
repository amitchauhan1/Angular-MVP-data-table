import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Employee } from '../../../employee-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-list-ui',
  templateUrl: './employee-list-prasenetation.html',
  styleUrls: ['./employee-list-prasenetation.scss']
})
export class EmpListPrasenetationComponent implements OnInit {

  /**
   * Get Employees data.
   */
  @Input() employees: Employee;

  /**
   * Create Event for send emit employee id for delete
   */
  @Output() deleteEmpEvent = new EventEmitter<Employee>();

  /**
   * Create Event for send emit employee id for edit
   */
  @Output() editEmpEvent = new EventEmitter<Employee>();

  /**
   * create new event for search.
   */
  @Output() searchQuraryEvent = new EventEmitter<Employee>();

  // For search textbox
  public searchQuary;
  order: string = 'name';
  reverse: boolean = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  /**
   * Add New employee
   */
  addEmployee() {
    this.router.navigate(['employee-add']);
  }

  /**
   * Employee delete from api
   * @param id Employee Id for delete
   */
  deleteEmployee(id) {
    this.deleteEmpEvent.emit(id);
  }

  /**
   * Employee edit record from api
   * @param id Employee Id for edit
   */
  editEmployee(id) {
    this.editEmpEvent.emit(id);
  }

  /**
   * search for emit event
   */
  search() {
    this.searchQuraryEvent.emit(this.searchQuary);
  }

  // set order for sorting
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }
}
