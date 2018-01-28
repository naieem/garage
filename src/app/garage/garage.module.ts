import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//----------- module and service declaration block ------------//
import { GarageService } from './garage.service';
import { CarModule } from '../car/car.module';

//----------- component declaration block ------------//
import { GarageComponent } from './garage/garage.component';
import { CarListComponent } from '../car/car-list/car-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: GarageComponent,
    children: [
      // { path: '', redirectTo: '/car', pathMatch: 'full' },
      { path: 'car', component: CarListComponent }
    ]
  },
];


@NgModule({
  imports: [
    CommonModule,
    CarModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [GarageComponent],
  exports:[GarageComponent],
  providers: [GarageService]
})
export class GarageModule { }
