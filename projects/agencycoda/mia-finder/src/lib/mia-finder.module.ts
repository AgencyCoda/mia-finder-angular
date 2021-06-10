/** Angular Core Libraries */
import { NgModule } from '@angular/core';

/** MIA Libraries */
import { MiaCoreModule } from '@agencycoda/mia-core';
import { MiaFormModule } from '@agencycoda/mia-form';
import { MiaLoadingModule } from '@agencycoda/mia-loading';

/** Components */
import { MiaFinderComponent } from './mia-finder.component';
import { MiaTableModule } from '@agencycoda/mia-table';


@NgModule({
  declarations: [
    MiaFinderComponent
  ],
  imports: [
    MiaCoreModule,
    MiaLoadingModule,
    MiaFormModule,
    MiaTableModule
  ],
  exports: [
    MiaFinderComponent
  ]
})
export class MiaFinderModule { }
