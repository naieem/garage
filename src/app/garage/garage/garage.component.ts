import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {
  private notificaton: number;
  constructor() {
    this.notificaton = 0;
  }

  ngOnInit() {
  }
  addNewCar() {
    alert('hello world');
  }
}
