import { Injectable } from '@angular/core';
import { carItem } from './carItem';
import { Car } from './car';
@Injectable()
export class CarService {
  private carItem:Car[];
  private dataAlreadyExists:boolean=false;
  constructor() {
    this.checkExistingData(); // checking already existing data
    
    /**
     * if already no data in localstorage then set dummy data
     * @param {}
     */
    if(!this.dataAlreadyExists){
      this.carItem=carItem;
      localStorage.setItem('cars',JSON.stringify(this.carItem));
    }else{
      this.carItem=this.getAllCars();
    }
  }

  /**
   * Getting all cars
   * @param {}
   */
  getAllCars(){
    return JSON.parse(localStorage.getItem('cars'));
  }

  /**
   * Adding new car by submitting form
   * @param {}
   */
  addNewCar(car:any){
    this.carItem.push(car);
    localStorage.setItem('cars',JSON.stringify(this.carItem));
  }

  getCarDetailsByID(id:number){
    return this.carItem[id];
  }

  updateCarDetails(data:any,id:number){
    this.carItem[id]=data;
    localStorage.setItem('cars',JSON.stringify(this.carItem));
  }
  /**
   * checking whether there is some data in localstorage
   * @param {}
   */
  checkExistingData(){
    let cars =JSON.parse(localStorage.getItem('cars'));
    if(cars && cars.length && cars.length > 0){
      return this.dataAlreadyExists=true;
    }else{
      this.dataAlreadyExists=false;
    }
  }

  /**
   * Removing car from list
   * @param {}
   */
  removeFromCarList(index:number){
    this.carItem.splice(index,1);
    localStorage.setItem('cars',JSON.stringify(this.carItem));
  }
}
