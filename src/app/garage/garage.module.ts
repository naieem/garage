import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// ----------- module and service declaration block ------------//
import { GarageService } from './garage.service';

// ----------- component declaration block ------------//
import { GarageComponent } from './garage/garage.component';
import { GarageRoutingModule, appModules } from './garage.routing.module';

@NgModule({
  imports: [
    CommonModule,
    appModules,
    GarageRoutingModule,
    RouterModule
  ],
  declarations: [GarageComponent],
  exports: [GarageComponent],
  providers: [GarageService]
})
export class GarageModule { }
