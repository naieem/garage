import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// ----------- importing dependencies modules list ------------//
import { LoginModule } from '../login/login.module';
import { MainContentModule } from '../main-content/main-content.module';
import { GarageModule } from '../garage/garage.module';
import { PageNotFoundModule } from '../page-not-found/page-not-found.module';
import { CarModule } from '../car/car.module';
// ----------- importing dependency components list ------------//
import { LoginComponent } from '../login/login/login.component';
import { MainContentComponent } from '../main-content/main-content/main-content.component';
import { GarageComponent } from '../garage/garage/garage.component';
import { CarListComponent } from '../car/car-list/car-list.component';
import { CarNewComponent } from '../car/car-new/car-new.component';
import {  CarDetailsComponent} from '../car/car-details/car-details.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',component:MainContentComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'garage',
    // component: GarageComponent,
    loadChildren: '../garage/garage.module#GarageModule',
  },
  {
    path: '**',
    // redirectTo: '/login',
    // pathMatch: 'full'
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only

      }
    ),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routerModules = [LoginModule, MainContentModule, GarageModule, CarModule, PageNotFoundModule];


