import { AuthService } from '../services/auth.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user: Observable<firebase.User>

  constructor(private authSrv: AuthService) {
    this.user = this.authSrv.user;
  }

  logout() {
    this.authSrv.logout();
  }
}
