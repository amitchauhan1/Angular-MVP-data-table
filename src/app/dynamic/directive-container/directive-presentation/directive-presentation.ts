import { Component, OnInit } from '@angular/core';
import { DirectivePresenter } from '../directive-presenter/directive-presenter';

@Component({
  selector: 'app-directive-ui',
  templateUrl: './directive-presentation.html',
  styleUrls: ['./directive-presentation.scss'],
  viewProviders: [DirectivePresenter]
})
export class DirectivePresentation implements OnInit {
  fieldName;
  tableHeader = ['name', 'email', 'mobile', 'address', 'gender', 'department', 'hiredate', 'parmanent'];
  constructor() { }

  ngOnInit() {
  }
  getField(field){
    this.fieldName = field;
  }

}
