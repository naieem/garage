import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data-service/data.service';
@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
   this.dataService.getSong().subscribe(data => {
    const items = data.json();
    console.log(items.results);
  });
  }

}
