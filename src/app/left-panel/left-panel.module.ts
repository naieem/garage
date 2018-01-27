import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteLogoModule } from '../site-logo/site-logo.module';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { MenuModule } from '../menu/menu.module';
@NgModule({
  imports: [
    CommonModule,
    SiteLogoModule,
    MenuModule
  ],
  declarations: [LeftPanelComponent],
  exports: [LeftPanelComponent]
})
export class LeftPanelModule { }
