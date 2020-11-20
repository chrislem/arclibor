import { Component } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from './_models/user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: User;
  logged = false;

  constructor(private accountService: AccountService) {
      this.accountService.user.subscribe(x => this.user = x);
  }

  logout() {
    this.logged = false;
      this.accountService.logout();
  }
}
