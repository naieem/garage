import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as _ from 'lodash';
@Injectable()
export class FavouriteService {
  favItems: any[];
  // Observable number sources
  private newFavItemSource = new Subject<any>();
  newFavItemAdded = this.newFavItemSource.asObservable();

  constructor() {
    this.favItems = [];
   }

  addNewFavItem(item) {
    if (this.checkIfItemAlreadyExists(item) === -1) {
      this.favItems.push(item);
      this.newFavItemSource.next(item);
    }
  }
  checkIfItemAlreadyExists(item) {
    return _.findIndex(this.favItems, function(o) { return o.trackName === item.trackName; });
  }

}
