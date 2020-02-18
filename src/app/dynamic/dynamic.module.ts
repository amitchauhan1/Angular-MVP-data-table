import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { DynamicComponent } from './dynamic-component/dynamic.component';

import { PipeContainer } from './pipe-container/pipe-container';
import { DirectiveContainer } from './directive-container/directive-container';
import { DirectivePresentation } from './directive-container/directive-presentation/directive-presentation';
import { PipePresentation } from './pipe-container/pipe-presentation/pipe-presentation';
import { DialogService } from './dialog/dialog.service';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [
    DynamicComponent,
    DirectiveContainer,
    PipeContainer,
    DirectivePresentation,
    PipePresentation
  ],
  imports: [
    CommonModule,
    DynamicRoutingModule,
    OverlayModule
  ],
  providers: [DialogService],
  entryComponents: [DirectiveContainer, PipeContainer]
})
export class DynamicModule { }
