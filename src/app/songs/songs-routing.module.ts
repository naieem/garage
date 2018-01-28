import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// ----------- module declaration block ------------//

// ----------- component declaration block ------------//
import { SongsComponent } from './songs/songs.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SongsComponent
    // children: [
    //   { path: '', redirectTo: 'cars', pathMatch: 'full' },
    //   { path: 'cars', component: CarListComponent },
    //   { path: 'cars/new', component: CarNewComponent },
    //   { path: 'cars/details/:id', component: CarDetailsComponent }
    // ]
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: []
})
export class SongsRoutingModule { }
