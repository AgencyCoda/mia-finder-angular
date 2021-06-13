import { MIA_AUTH_PROVIDER } from '@agencycoda/mia-auth';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiaFinderModule } from 'projects/agencycoda/mia-finder/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MiaFinderModule
  ],
  providers: [
    { 
      provide: MIA_AUTH_PROVIDER, 
      useValue: {
        baseUrl: 'http://localhost:8080/'
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
