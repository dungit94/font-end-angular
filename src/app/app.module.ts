import { ServiceWorkerModule } from '@angular/service-worker';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared/shared.module';
import { NgxWebstorageModule } from 'ngx-webstorage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: false }),
    NgxWebstorageModule.forRoot({ prefix: 'app', separator: '-', caseSensitive: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
