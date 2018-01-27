import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GarageComponent } from './garage/garage.component';
import { GarageService } from './garage.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GarageComponent],
  providers: [GarageService]
})
export class GarageModule { }
