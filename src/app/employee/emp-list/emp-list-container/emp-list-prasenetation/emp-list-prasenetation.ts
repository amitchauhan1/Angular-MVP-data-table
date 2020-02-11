import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Employee } from '../../../Employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-list-ui',
  templateUrl: './emp-list-prasenetation.html',
  styleUrls: ['./emp-list-prasenetation.scss']
})
export class EmpListPrasenetationComponent implements OnInit {
  // For search textbox
  public searchText: string;
  order: string = 'name';
  reverse: boolean = false;

  /**
   * Get Employees data.
   */
  @Input() employees:Employee;
  constructor(
    private router:Router
  ) { }

  /**
   * Create Event for send emit employee id for delete
   */
  @Output() deleteEmpEvent = new EventEmitter<Employee>();

  /**
   * Create Event for send emit employee id for edit
   */
  @Output() editEmpEvent = new EventEmitter<Employee>();

  ngOnInit() {
  }

  /**
   * Add New employee
   */
  addEmployee(){
    this.router.navigate(['employee-add'])
  }

  /**
   * Employee delete from api
   * @param id Employee Id for delete
   */
  deleteEmployee(id){
    this.deleteEmpEvent.emit(id);
  }

  /**
   * Employee edit record from api
   * @param id Employee Id for edit
   */
  editEmployee(id){
    this.editEmpEvent.emit(id);
  }

  // set order for sorting
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }
}
