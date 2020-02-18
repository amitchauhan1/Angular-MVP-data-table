import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-directive-container',
  templateUrl: './directive-container.html',
  styleUrls: ['./directive-container.scss']
})
export class DirectiveContainer implements OnInit {
  message: string;
  constructor() { }

  ngOnInit() {
  }

}
