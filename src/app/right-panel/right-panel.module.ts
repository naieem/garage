import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightPanelComponent } from './right-panel/right-panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RightPanelComponent],
  exports: [RightPanelComponent]
})
export class RightPanelModule { }
