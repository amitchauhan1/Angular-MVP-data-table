import { Component, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';

import { DirectiveContainer } from '../directive-container/directive-container';
import { PipeContainer } from '../pipe-container/pipe-container';

/**
 * @author Amit Chauhan
 */
@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit, OnDestroy {

  @ViewChild('directive', { read: ViewContainerRef, static: false }) entryDirective: ViewContainerRef;

  private componentRef: ComponentRef<DirectiveContainer>;
  public portelRef: ComponentPortal<PipeContainer>;

  public isMenuOpen: boolean;

  constructor(
    private resolver: ComponentFactoryResolver,
    private overlay: Overlay,
  ) {
    this.isMenuOpen = false;
  }
  ngOnInit(): void {
  }

  public createComponentDirective(): void {
    this.entryDirective.clear();
    const factory = this.resolver.resolveComponentFactory(DirectiveContainer);
    this.componentRef = this.entryDirective.createComponent(factory);
  }

  public createComponentPipe(): void {
    this.entryDirective.clear();
    this.portelRef = new ComponentPortal(PipeContainer);
  }

  public openDialog(): void {
    this.entryDirective.clear();
    const config = new OverlayConfig();
    config.positionStrategy = this.overlay.position()
      .global()
      .centerVertically()
      .centerHorizontally();
    // this.nextPosition += 30;
    config.hasBackdrop = true;
    const overlayRef = this.overlay.create(config);
    overlayRef.attach(new ComponentPortal(PipeContainer));

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

}
