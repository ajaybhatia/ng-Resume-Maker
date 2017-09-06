import { AuthService } from '../services/auth.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  user: Observable<firebase.User>

  constructor(private authSrv: AuthService, private router: Router) {
    this.user = authSrv.user;
  }

  logout() {
    this.authSrv.logout();
    this.router.navigate(['/login']);
  }
}
