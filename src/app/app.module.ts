import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GpcardComponent } from './gpcard/gpcard.component';
import { PartydetailComponent } from './partydetail/partydetail.component';
import { LoginComponent } from './header/login/login.component';
import { VerifyComponent } from './header/verify/verify.component';
import { callBackRequestComponent } from './header/call-back-request/call-back-request.component';

import { AppdownloadComponent } from './appdownload/appdownload.component';

import { RemainTimePipe } from './pipe/remaintime.pipe';
import { ExplodePipe } from './pipe/explode.pipe';
import { ModalModule } from './modal/modal.module';


import { HttpService } from './service/http.service';
import { StorageService } from './service/storage.service';
import { AuthenticationGaurd } from './service/authentication.gaurd';
import { BaseService } from './service/base.service';

import { BaseRequest } from './request/baserequest';
import { HomeRequest } from './request/home.request';
import { LoginRequest } from './request/login.request';
import { PartyDetailRequest } from './request/partydetail.request';
import { ResendRequest } from './request/resend.request';
import { VerifyRequest } from './request/verify.request';

import { BookingHistoryRequest } from './request/bookingHistory.request';
import { GetAppLinkRequest } from './request/getapplink.request';

import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import * as routings from './app.routings';
import * as services from './app.services';


@NgModule({
  declarations: [
    AppComponent,
    RemainTimePipe,
    ExplodePipe,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    GpcardComponent,
    PartydetailComponent,
    LoginComponent,
    VerifyComponent,
    callBackRequestComponent,
    AppdownloadComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId:'webapp'}),
    HttpModule,
    FormsModule,
    ModalModule,
    RouterModule.forRoot(routings.all)
  ],
  providers: [
    AuthenticationGaurd,
    StorageService,
    BaseService,
    HttpService
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, VerifyComponent,callBackRequestComponent]
})
export class AppModule { }
