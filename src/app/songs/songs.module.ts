import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// ======================================
// Module importation block
// ======================================
import { SongsRoutingModule } from './songs-routing.module';
import { DataServiceModule } from '../data-service/data-service.module';
import { FavouriteItemModule } from '../favourite-item/favourite-item.module';
// ======================================
// Component declaration block
// ======================================
import { SongsComponent } from './songs/songs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SongsRoutingModule,
    RouterModule,
    DataServiceModule,
    FavouriteItemModule
  ],
  declarations: [SongsComponent],
  exports: [SongsComponent]
})
export class SongsModule { }
