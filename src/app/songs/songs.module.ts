import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DataServiceModule } from '../data-service/data-service.module';
import { SongsComponent } from './songs/songs.component';
import { SongsRoutingModule } from './songs-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SongsRoutingModule,
    RouterModule,
    DataServiceModule
  ],
  declarations: [SongsComponent],
  exports: [SongsComponent]
})
export class SongsModule { }
