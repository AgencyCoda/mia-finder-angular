/** Angular Core Libraries */
import { NgModule } from '@angular/core';

/** Angular Material Libraries */
import { MatDialogModule } from '@angular/material/dialog';

/** MIA Libraries */
import { MiaCoreModule } from '@agencycoda/mia-core';
import { MiaFormModule } from '@agencycoda/mia-form';
import { MiaLoadingModule } from '@agencycoda/mia-loading';
import { MiaAuthModule } from '@agencycoda/mia-auth';
import { MiaTableModule } from '@agencycoda/mia-table';

/** Components */
import { MiaFinderComponent } from './mia-finder.component';





@NgModule({
  declarations: [
    MiaFinderComponent
  ],
  imports: [
    /** Mia Libraries */
    MiaCoreModule,
    MiaAuthModule,
    MiaLoadingModule,
    MiaFormModule,
    MiaTableModule,

    /** Angular Material */
    MatDialogModule
  ],
  exports: [
    MiaFinderComponent
  ]
})
export class MiaFinderModule { }
