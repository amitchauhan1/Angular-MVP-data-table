import { Directive, Output, HostListener, ElementRef } from '@angular/core';
import { EventEmitter } from 'events';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click') onMouseClick() {
    if (this.highlight) {
      this.highlight('blue');
    } else {
      this.highlight('yellow');
    }
  }

  @HostListener('mouseleave') onMouseEnter() {
    this.highlight('yellow');
  }

  private highlight(color: string) {
    this.el.nativeElement.innerHTML = `^`;
  }
}
