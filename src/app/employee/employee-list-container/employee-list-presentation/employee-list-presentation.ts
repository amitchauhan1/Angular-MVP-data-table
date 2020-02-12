import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../employee-model';

@Component({
  selector: 'app-emp-list-ui',
  templateUrl: './employee-list-presentation.html',
  styleUrls: ['./employee-list-presentation.scss']
})
export class EmployeeListPresentation implements OnInit {

  /**
   * Get Employees data.
   */
  @Input() employees: Employee;

  /**
   * Create Event for send emit employee id for delete
   */
  @Output() deleteEmpEvent = new EventEmitter<number>();

  /**
   * Create Event for send emit employee id for edit
   */
  @Output() editEmpEvent = new EventEmitter<number>();

  /**
   * create new event for search.
   */
  @Output() searchQueryEvent = new EventEmitter<string>();

  // For search textbox
  public searchQuery;
  order: string = 'name';
  reverse: boolean = false;
  constructor(
    private router: Router
  ) { 
    
  }

  ngOnInit() {
  }

  /**
   * Employee delete from api
   * @param id Employee Id for delete
   */
  public deleteEmployee(id: number): void {
    this.deleteEmpEvent.emit(id);
  }

  /**
   * Employee edit record from api
   * @param id Employee Id for edit
   */
  public editEmployee(id: number): void {
    this.editEmpEvent.emit(id);
  }

  /**
   * search for emit event
   */
  public search(): void {
    this.searchQueryEvent.emit(this.searchQuery);
  }

  // set order for sorting
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }
}
