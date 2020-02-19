import { Component, OnInit } from '@angular/core';
import { PipePresenter } from '../pipe-presenter/pipe-presenter';

@Component({
  selector: 'app-pipe-ui',
  templateUrl: './pipe-presentation.html',
  styleUrls: ['./pipe-presentation.scss'],
  viewProviders: [PipePresenter]
})
export class PipePresentation implements OnInit {
  clickEmoji = 'happy';
  constructor() { }

  ngOnInit() {
  }

}
