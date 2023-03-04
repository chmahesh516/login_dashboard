import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import { ForgotPwdComponent } from './component/forgot-pwd/forgot-pwd.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BidiModule} from '@angular/cdk/bidi';
import { SharedServiceService } from './modules/admin/components/shared-service.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPwdComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,SharedModule,ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule,FlexLayoutModule,BidiModule,FormsModule
  ],
  providers: [SharedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
