import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../car'; // car skeleton class
import { CarService } from '../car.service'; // car actions service
@Component({
  selector: 'app-car-new',
  templateUrl: './car-new.component.html',
  styleUrls: ['./car-new.component.css']
})
export class CarNewComponent implements OnInit {
  private car: Car;
  constructor(private carService: CarService, private router: Router) {
    this.car = new Car();
  }

  ngOnInit() {
  }
  /**
   * adding new car
   * @param {}
   */
  addNewCar() {
    this.carService.addNewCar(this.car);
    this.router.navigate(['/garage']);
  }
  /**
   * Go Back to car list
   * @param {}
   */
  goBack() {
    this.router.navigate(['/garage']);
  }

}
