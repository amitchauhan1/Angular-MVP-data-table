import { Component, OnInit } from '@angular/core';
import { PipePresenter } from '../pipe-presenter/pipe-presenter';

/**
 * @author Amit Chauhan
 */
@Component({
  selector: 'app-pipe-ui',
  templateUrl: './pipe-presentation.html',
  styleUrls: ['./pipe-presentation.scss'],
  viewProviders: [PipePresenter]
})
export class PipePresentation implements OnInit {
  public plular: string;
  public clickEmoji: string;
  public clickplular: string;

  constructor() {
    this.clickEmoji = 'happy';
  }

  ngOnInit() {
  }

}
