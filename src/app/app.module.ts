import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { RefParentComponent } from './reference/ref-parent/ref-parent.component';
import { RefChildComponent } from './reference/ref-child/ref-child.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { VcParentComponent } from './view-child/vc-parent/vc-parent.component';
import { VcChildComponent } from './view-child/vc-child/vc-child.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AuthInterceptor } from './services/interceptors/auth.interceptor';
import { InpParentComponent } from './input/inp-parent/inp-parent.component';
import { InpChildComponent } from './input/inp-child/inp-child.component';
import { OutputParentComponent } from './output/output-parent/output-parent.component';
import { OutputChildComponent } from './output/output-child/output-child.component';
import { ClickDirective } from './services/directives/click.directive';
import { DirectiveComponent } from './directive/directive.component';
import { PercentagePipe } from './services/pipes/percentage.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { ResultPipe } from './services/pipes/result.pipe';
import { AdminModule } from './admin/admin.module';
import { TemplateFormUpdateComponent } from './template-form-update/template-form-update.component';
import { ReactiveFormUpdateComponent } from './reactive-form-update/reactive-form-update.component';
import { ReactiveComponent } from './tasks/reactive/reactive.component';
import { ReactiveUpdateComponent } from './reactive-update/reactive-update.component';
import { DisplayImagesComponent } from './display-images/display-images.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { MultiCheckComponent } from './multi-check/multi-check.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    Page404Component,
    RefParentComponent,
    RefChildComponent,
    VcParentComponent,
    VcChildComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    InpParentComponent,
    InpChildComponent,
    OutputParentComponent,
    OutputChildComponent,
    ClickDirective,
    DirectiveComponent,
    PercentagePipe,
    PipeComponent,
    ResultPipe,
    TemplateFormUpdateComponent,
    ReactiveFormUpdateComponent,
    ReactiveComponent,
    ReactiveUpdateComponent,
    DisplayImagesComponent,
    UploadImageComponent,
    MultiCheckComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
