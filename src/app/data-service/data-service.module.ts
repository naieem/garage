import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule, Http, Response} from '@angular/http';
import { DataService } from './data.service';
@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [DataService]
})
export class DataServiceModule { }
