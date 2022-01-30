import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefectsComponent } from './defects.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DefectMapModule } from 'src/app/components/defect-map/defect-map.module';



@NgModule({
  declarations: [
    DefectsComponent
  ],
  imports: [
    CommonModule,
    DefectMapModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    DefectsComponent
  ]
})
export class DefectsModule { }
