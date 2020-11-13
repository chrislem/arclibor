import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'uxg-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})

export class UxgToolbar {
  @Output() menuClick = new EventEmitter<boolean>();

  toggleNav() {
    this.menuClick.emit(true);
  }
} 
