import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';
import { FromComponent } from './from/from.component';
import { FormControlComponent } from './form-control/form-control.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RxjsComponent,
    FromComponent,
    FormControlComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule,
    ReactiveFormsModule
  ]
})
export class RxjsModule { }
