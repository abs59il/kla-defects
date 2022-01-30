import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefectMapComponent } from './defect-map.component';
import { DefectMapItemComponent } from './components/defect-map-item/defect-map-item.component';



@NgModule({
  declarations: [
    DefectMapComponent,
    DefectMapItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DefectMapComponent,
    DefectMapItemComponent
  ]
})
export class DefectMapModule { }
