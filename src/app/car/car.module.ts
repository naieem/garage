import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarListComponent } from './car-list/car-list.component';
import { CarComponent } from './car/car.component';
import { CarService } from './car.service';
import { CarNewComponent } from './car-new/car-new.component';
import { CarDetailsComponent } from './car-details/car-details.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CarListComponent, CarComponent, CarNewComponent, CarDetailsComponent],
  exports: [CarListComponent, CarComponent,CarNewComponent],
  providers:[CarService]
})
export class CarModule { }
