import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnDestroy, ComponentRef } from '@angular/core';
import { DirectiveContainer } from '../directive-container/directive-container';
import { PipeContainer } from '../pipe-container/pipe-container';
import { DialogService } from '../dialog/dialog.service';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit, OnDestroy {


  @ViewChild('directive', { read: ViewContainerRef, static: false }) entryDirective: ViewContainerRef;
  @ViewChild('pipe', { read: ViewContainerRef, static: false }) entryPipe: ViewContainerRef;

  componentRef: ComponentRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private dialogService: DialogService,
    ) { }

  createComponentDirective() {
    this.entryDirective.clear();
    const factory = this.resolver.resolveComponentFactory(DirectiveContainer);
    this.componentRef = this.entryDirective.createComponent(factory);
  }

  createComponentPipe() {
    this.entryPipe.clear();
    const factory = this.resolver.resolveComponentFactory(PipeContainer);
    this.componentRef = this.entryPipe.createComponent(factory);
  }

  openDialog(): void {
    this.dialogService.open(
      PipeContainer
    );
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

}
