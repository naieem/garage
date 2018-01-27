import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private menuItems: Menu[];
  constructor() {
    this.menuItems = [
      {
        name: 'Home',
        url: '',
        action: ''
      },
      {
        name: 'Login',
        url: '/login',
        action: ''
      }
    ];
  }

  ngOnInit() {
  }

}
