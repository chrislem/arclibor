import {Component, Output, EventEmitter} from '@angular/core';
import { User } from '@app/_models/user.model';
import { AccountService } from '@app/_services/account.service';

@Component({
  selector: 'uxg-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})

export class UxgToolbar {
  @Output() menuClick = new EventEmitter<boolean>();

  user: User;

  constructor(private accountService: AccountService) {
      this.user = this.accountService.userValue;
  }

  toggleNav() {
    this.menuClick.emit(true);
  }

  logout() {
    this.accountService.logout();
  }
} 
