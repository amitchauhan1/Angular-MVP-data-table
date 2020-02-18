import { Component, OnInit } from '@angular/core';
import { DirectivePresenter } from '../directive-presenter/directive-presenter';

@Component({
  selector: 'app-directive-ui',
  templateUrl: './directive-presentation.html',
  styleUrls: ['./directive-presentation.scss'],
  viewProviders:[DirectivePresenter]
})
export class DirectivePresentation implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
