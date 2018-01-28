import { Component, OnInit,OnDestroy  } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CarService } from '../car.service';
import { Car } from '../car';
@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit,OnDestroy  {
  private id: number;
  private Observer: any;
  private car:Car;
  constructor(private route: ActivatedRoute,private carService:CarService,private router:Router) { }

  ngOnInit() {
    this.Observer = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.car=this.carService.getCarDetailsByID(this.id);
      console.log(this.car);
   });
  }

  /**
   * Updating car information
   * @param obj
   */
  updateCarData(car){
    this.carService.updateCarDetails(car,this.id);
    this.router.navigate(['/garage']);
  }

  /**
   * Go Back to car list
   * @param {}
   */
  goBack(){
    this.router.navigate(['/garage']);
  }

  ngOnDestroy() {
    this.Observer.unsubscribe();
  }

}
