import { Component, OnInit } from '@angular/core';
import { FavouriteService } from '../favourite.service';
@Component({
  selector: 'app-favourite-item-list',
  templateUrl: './favourite-item-list.component.html',
  styleUrls: ['./favourite-item-list.component.css']
})
export class FavouriteItemListComponent implements OnInit {
  favrouteItems: any[] = [];
  constructor(private favService: FavouriteService) {
    favService.newFavItemAdded.subscribe(item => {
      this.favrouteItems.push(item);
    });
  }

  ngOnInit() {
  }

}
