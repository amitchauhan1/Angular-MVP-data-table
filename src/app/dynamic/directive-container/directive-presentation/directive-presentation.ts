import { Component, OnInit } from '@angular/core';
import { DirectivePresenter } from '../directive-presenter/directive-presenter';

/**
 * @author Amit Chauhan
 */
@Component({
  selector: 'app-directive-ui',
  templateUrl: './directive-presentation.html',
  viewProviders: [DirectivePresenter]
})
export class DirectivePresentation implements OnInit {
  public fieldName: string;
  public tableHeader: object;
  constructor() {
    this.tableHeader = ['name', 'email', 'mobile', 'address', 'gender', 'department', 'hiredate', 'parmanent'];
  }

  ngOnInit() {
  }

  public getField(field: string): void {
    this.fieldName = field;
  }

}
