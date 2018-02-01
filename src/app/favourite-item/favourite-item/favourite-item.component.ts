import { Component, OnInit, Input } from '@angular/core';
import { FavouriteService } from '../favourite.service';
@Component({
  selector: 'app-favourite-item',
  templateUrl: './favourite-item.component.html',
  styleUrls: ['./favourite-item.component.css']
})
export class FavouriteItemComponent implements OnInit {
  count: number;
  @Input() title: string;
  constructor(private favService: FavouriteService) {
    /**
     * subscribing to favservice for getting newly added fav Item
     * @param {}
     */
    favService.newFavItemAdded.subscribe(res => {
      this.count = res;
    });
  }

  ngOnInit() {
  }

}
