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
  private car:Car;
  constructor(private carService:CarService,private router:Router) { 
    this.car=new Car();
  }

  ngOnInit() {
  }
  addNewCar(){
    this.carService.addNewCar(this.car);
    this.router.navigate(['/garage']);
  }

}
