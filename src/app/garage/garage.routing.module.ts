import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// ----------- module declaration block ------------//
import { CarModule } from '../car/car.module';
// ----------- component declaration block ------------//
import { GarageComponent } from './garage/garage.component';
import { CarListComponent } from '../car/car-list/car-list.component';
import { CarNewComponent } from '../car/car-new/car-new.component';
import { CarDetailsComponent } from '../car/car-details/car-details.component';

const appRoutes: Routes = [
  {
    path: '',
    component: GarageComponent,
    children: [
      { path: '', redirectTo: 'cars', pathMatch: 'full' },
      { path: 'cars', component: CarListComponent },
      { path: 'cars/new', component: CarNewComponent },
      { path: 'cars/details/:id', component: CarDetailsComponent }
    ]
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: []
})
export class GarageRoutingModule { }
export const appModules = [CarModule];
