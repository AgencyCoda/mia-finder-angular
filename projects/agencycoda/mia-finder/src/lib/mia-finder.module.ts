/** Angular Core Libraries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Angular Material Libraries */
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';


/** MIA Libraries */
import { MiaCoreModule } from '@agencycoda/mia-core';
import { MiaFormModule } from '@agencycoda/mia-form';
import { MiaLoadingModule } from '@agencycoda/mia-loading';
import { MiaAuthModule } from '@agencycoda/mia-auth';
import { MiaTableModule } from '@agencycoda/mia-table';

/** Components */
import { MiaFinderComponent } from './mia-finder.component';
import { MiaUploadingComponent } from './components/mia-uploading/mia-uploading.component';
import { MiaBreadcrumbComponent } from './components/mia-breadcrumb/mia-breadcrumb.component';







@NgModule({
  declarations: [
    MiaFinderComponent,
    MiaUploadingComponent,
    MiaBreadcrumbComponent
  ],
  imports: [
    /** Angular Core */
    CommonModule,

    /** Mia Libraries */
    MiaCoreModule,
    MiaAuthModule,
    MiaLoadingModule,
    MiaFormModule,
    MiaTableModule,

    /** Angular Material */
    MatDialogModule,
    MatIconModule,
    MatProgressBarModule
  ],
  exports: [
    MiaFinderComponent,
    MiaUploadingComponent,
    MiaBreadcrumbComponent
  ]
})
export class MiaFinderModule { }
