import { MIA_AUTH_PROVIDER } from '@agencycoda/mia-auth';
import { MIA_GOOGLE_STORAGE_PROVIDER, MIA_CORE_PROVIDER } from '@agencycoda/mia-core';
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
      provide: MIA_CORE_PROVIDER, 
      useValue: {
        baseUrl: 'http://localhost:8080/'
      }
    },
    { 
      provide: MIA_AUTH_PROVIDER, 
      useValue: {
        baseUrl: 'http://localhost:8080/'
      }
    },
    {
      provide: MIA_GOOGLE_STORAGE_PROVIDER,
      useValue: {
        bucket: 'valero-files'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
