import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnDestroy, ComponentRef } from '@angular/core';
import { DirectiveContainer } from '../directive-container/directive-container';
import { PipeContainer } from '../pipe-container/pipe-container';
import { OverlayConfig, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit, OnDestroy {


  @ViewChild('directive', { read: ViewContainerRef, static: false }) entryDirective: ViewContainerRef;

  componentRef: ComponentRef<DirectiveContainer>;
  portelRef: ComponentPortal<PipeContainer>;

  isMenuOpen: boolean = false;

  constructor(
    private resolver: ComponentFactoryResolver,
    private overlay: Overlay,
    ) { }

  createComponentDirective() {
    this.entryDirective.clear();
    const factory = this.resolver.resolveComponentFactory(DirectiveContainer);
    this.componentRef = this.entryDirective.createComponent(factory);
  }

  createComponentPipe() {
    this.entryDirective.clear();
    this.portelRef = new ComponentPortal(PipeContainer);
  }

  openDialog(): void {
    const config = new OverlayConfig();

    config.positionStrategy = this.overlay.position()
        .global()
        .centerVertically()
        .centerHorizontally();

    // this.nextPosition += 30;

    config.hasBackdrop = true;

    const overlayRef = this.overlay.create(config);
    overlayRef.attach(new ComponentPortal(DirectiveContainer));

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

}
