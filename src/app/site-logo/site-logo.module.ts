import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteLogoComponent } from './site-logo/site-logo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SiteLogoComponent],
  exports: [SiteLogoComponent]
})
export class SiteLogoModule { }
