import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favourite-item',
  templateUrl: './favourite-item.component.html',
  styleUrls: ['./favourite-item.component.css']
})
export class FavouriteItemComponent implements OnInit {
  @Input() title: string;
  @Input() count: number;
  constructor() { }

  ngOnInit() {
  }

}
