import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteItemComponent } from './favourite-item/favourite-item.component';
import { FavouriteService } from './favourite.service';
import { FavouriteItemListComponent } from './favourite-item-list/favourite-item-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FavouriteItemComponent, FavouriteItemListComponent],
  exports: [FavouriteItemComponent, FavouriteItemListComponent],
  providers: [FavouriteService]
})
export class FavouriteItemModule { }
