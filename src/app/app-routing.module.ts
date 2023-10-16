import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Page404Component } from './page404/page404.component';
import { RefParentComponent } from './reference/ref-parent/ref-parent.component';
import { VcParentComponent } from './view-child/vc-parent/vc-parent.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { InpParentComponent } from './input/inp-parent/inp-parent.component';
import { OutputParentComponent } from './output/output-parent/output-parent.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { DeactivateGuard } from './services/guards/deactivate.guard';
import { CaGuardGuard } from './services/guards/ca-guard.guard';
import { CanLoadGuard } from './services/guards/can-load.guard';
import { TemplateFormUpdateComponent } from './template-form-update/template-form-update.component';
import { ReactiveFormUpdateComponent } from './reactive-form-update/reactive-form-update.component';
import { ReactiveComponent } from './tasks/reactive/reactive.component';
import { ReactiveUpdateComponent } from './reactive-update/reactive-update.component';
import { DisplayImagesComponent } from './display-images/display-images.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { MultiCheckComponent } from './multi-check/multi-check.component';

const routes: Routes = [
  {
    path: "", component: IndexComponent, children: [
      { path: "", pathMatch: "full", component: HomeComponent },
      { path: "about", component: AboutComponent },
      { path: "contact", component: ContactComponent },
      { path: "ref-parent", component: RefParentComponent, canActivate: [CaGuardGuard] },
      { path: "vc-parent", component: VcParentComponent },
      { path: "template-form", component: TemplateFormComponent, canDeactivate: [DeactivateGuard] },
      { path: "reactive-form", component: ReactiveFormComponent },
      { path: "input", component: InpParentComponent },
      { path: "output", component: OutputParentComponent },
      { path: "directive", component: DirectiveComponent },
      { path: "pipe", component: PipeComponent },
      { path: "template-form-update", component: TemplateFormUpdateComponent },
      { path: "reactive-form-update", component: ReactiveFormUpdateComponent },
      { path: "reactive", component: ReactiveComponent },
      { path: "reactive-update", component: ReactiveUpdateComponent },
      { path: "display-images", component: DisplayImagesComponent},
      { path: "upload-image", component: UploadImageComponent},
      { path: "multi-check", component: MultiCheckComponent}
    ]
  },
  // { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'lazy', canLoad: [CanLoadGuard], loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
  { path: 'rxjs', loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule) },
  { path: '**', component: Page404Component }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
