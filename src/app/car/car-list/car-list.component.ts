import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../car.service'; // car actions service
import { Car } from '../car'; // car skeleton class
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  private cars: Car[];
  constructor(private carService: CarService, private router: Router) {
      this.getAllCars();
  }

  ngOnInit() {
  }

  getAllCars() {
      this.cars = this.carService.getAllCars();
  }
  /**
   * adding new car in the garage
   * @param {}
   */
  addNewCar() {
    this.router.navigate(['/garage/cars/new']);
  }

  /**
   * Showing car details
   * @param {}
   */
  showCarDetails(index) {
    this.router.navigate(['/garage/cars/details', index]);
  }

  /**
   * Removing car from list
   * @param {}
   */
  removeFromCarList(id: number) {
        this.carService.removeFromCarList(id);
        this.getAllCars();
  }

}
