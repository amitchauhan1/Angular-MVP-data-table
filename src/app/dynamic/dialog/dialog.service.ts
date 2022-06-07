import { Injectable, Type } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable()
export class DialogService {

  nextPosition: number = 20;
  isMenuOpen: boolean = false;
  constructor( 
    private overlay: Overlay,
    ) { }

  open(component: Type<any>): void {
    const config = new OverlayConfig();

    config.positionStrategy = this.overlay.position()
        .global()
        .left(`${this.nextPosition}px`)
        .top(`${this.nextPosition}px`);

    // this.nextPosition += 30;

    config.hasBackdrop = true;

    const overlayRef = this.overlay.create(config);
    overlayRef.attach(new ComponentPortal(component));

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });
  }
}
