import { Injectable } from '@angular/core';
import { CarService } from '../car/car.service';
@Injectable()
export class GarageService {

  constructor(private carService:CarService) { }
  
}
