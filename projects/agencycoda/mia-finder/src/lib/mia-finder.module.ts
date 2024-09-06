/** Angular Core Libraries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Angular Material Libraries */
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';

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
import { MiaFinderTableComponent } from './components/mia-finder-table/mia-finder-table.component';
import { FileColumnComponent } from './columns/file-column/file-column.component';
import { SizeColumnComponent } from './columns/size-column/size-column.component';
import { MiaMoveFileModalComponent } from './modals/mia-move-file-modal/mia-move-file-modal.component';
import { MiaVisorComponent } from './components/mia-visor/mia-visor.component';
import { MoreFinderColumnComponent } from './columns/more-finder-column/more-finder-column.component';










@NgModule({
  declarations: [
    MiaFinderComponent,
    MiaUploadingComponent,
    MiaBreadcrumbComponent,
    MiaFinderTableComponent,
    FileColumnComponent,
    SizeColumnComponent,
    MiaMoveFileModalComponent,
    MiaVisorComponent,
    MoreFinderColumnComponent
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
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MiaFinderComponent,
    MiaUploadingComponent,
    MiaBreadcrumbComponent,
    MiaFinderTableComponent,
    MiaVisorComponent
  ]
})
export class MiaFinderModule { }
