import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './shared/shared.module';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { AccessModule } from './features/access/access.module';
import { TokenService } from './shared/services/token.service';
import { JarService } from './shared/services/jar.service';
import { AuthService } from './shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { RouterModule } from '@angular/router';
registerLocaleData(localeDe, 'de');
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    ReactiveFormsModule,
    AccessModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    TokenService,
    JarService,
    AuthService,
    {
      provide: LOCALE_ID,
      useValue: 'de-DE'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
