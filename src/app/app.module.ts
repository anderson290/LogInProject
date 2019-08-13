import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCustomModule } from './modules/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {NgxMaskModule} from 'ngx-mask';
import { UserService } from './services/user.service';
import { ClientComponent } from './client/client.component';
import { MAT_DATE_LOCALE, DateAdapter } from '@angular/material/core';
import { NavComponent } from './nav/nav.component';
import { ListComponent } from './client/list/list.component';
import { AuthGuardService } from './guards/auth-guard.service';
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MM YYYY',
  },
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientComponent,
    NavComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialCustomModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    UserService,
    AuthGuardService,
    { provide: MAT_DATE_LOCALE, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
