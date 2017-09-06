import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMsg: string;
  user: User = new User();

  constructor(
    private authSrv: AuthService,
    private changeDetector: ChangeDetectorRef,
    private router: Router
  ) { }

  loginWithGoogle() {
    this.authSrv.loginWithGoogle()
      .then(success => this.router.navigate(['/home']))
      .catch(error => {
        this.errorMsg = error.message;
        // To push changes to DOM immediately
        this.changeDetector.detectChanges();
      });
  }

  loginWithFacebook() {
    this.authSrv.loginWithFacebook()
      .then(success => this.router.navigate(['/home']))
      .catch(error => {
        this.errorMsg = error.message;
        // To push changes to DOM immediately
        this.changeDetector.detectChanges();
      });
  }

  loginWithGithub() {
    this.authSrv.loginWithGithub()
      .then(success => this.router.navigate(['/home']))
      .catch(error => {
        this.errorMsg = error.message;
        // To push changes to DOM immediately
        this.changeDetector.detectChanges();
      });
  }

  loginWithTwitter() {
    this.authSrv.loginWithTwitter()
      .then(success => this.router.navigate(['/home']))
      .catch(error => {
        this.errorMsg = error.message;
        // To push changes to DOM immediately
        this.changeDetector.detectChanges();
      });
  }

  loginUser() {
    this.authSrv.loginUser(this.user)
      .then(success => this.router.navigate(['/home']))
      .catch(error => {
        this.errorMsg = error.message;
        // To push changes to DOM immediately
        this.changeDetector.detectChanges();
      });
  }

  closeAlert() {
    this.errorMsg = null;
  }
}
