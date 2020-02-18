import { Injectable, Type } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable()
export class DialogService {

  constructor( private overlay: Overlay) { }

  open(component: Type<any>): void {
    this.overlay
      .create({
        disposeOnNavigation: true,
        positionStrategy: this.overlay.position()
          .global()
          .left(`50%`)
        .top(`33px`)
      })
      .attach(new ComponentPortal(component));
  }
}
