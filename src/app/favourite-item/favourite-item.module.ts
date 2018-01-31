import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteItemComponent } from './favourite-item/favourite-item.component';
import { FavouriteService } from './favourite.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FavouriteItemComponent],
  exports: [FavouriteItemComponent],
  providers: [FavouriteService]
})
export class FavouriteItemModule { }
