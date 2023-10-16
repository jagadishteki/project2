import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './rxjs.component';
import { FromComponent } from './from/from.component';
import { FormControlComponent } from './form-control/form-control.component';

const routes: Routes = [
  { path: '', component: RxjsComponent },
  { path: 'from', component: FromComponent },
  { path: 'form-control', component: FormControlComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
