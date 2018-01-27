import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  @Input() name: string;
  @Output() updatedName = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sendToParent() {
    this.name = 'now again naieem';
    this.updatedName.emit(this.name);
  }

}
