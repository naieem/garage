import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-comp',
  templateUrl: './root-component.component.html',
  styleUrls: ['./root-component.component.css']
})
export class RootComponentComponent implements OnInit {
  private name: string;
  constructor() {
    this.name = 'naieem';
  }

  ngOnInit() {
  }

  sendToCHild() {
    this.name = 'changed tosupto';
  }

  nameUpdated(newName: string) {
    this.name = newName;
  }

}
