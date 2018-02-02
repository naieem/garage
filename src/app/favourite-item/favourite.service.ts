import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as _ from 'lodash';
@Injectable()
export class FavouriteService {
  favItems: any[];
  // Observable sources
  private newFavItemSource = new Subject<any>();
  private favitemCounterSource = new Subject<number>();
  newFavItemAdded = this.newFavItemSource.asObservable(); // storing newly added favourite items
  favItemCounter = this.favitemCounterSource.asObservable(); // storing added favourite items counter
  constructor() {
    this.favItems = [];
   }

  addNewFavItem(item) {
    if (this.checkIfItemAlreadyExists(item) === -1) {
      this.favItems.push(item);
      this.newFavItemSource.next(item);
      this.favitemCounterSource.next(this.favItems.length);
    }
  }
  checkIfItemAlreadyExists(item) {
    return _.findIndex(this.favItems, function(o) { return o.trackName === item.trackName; });
  }

}
