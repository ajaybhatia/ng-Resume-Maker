import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  errorMsg: Subject<any>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
  }

  registerUser(user: User) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  loginUser(user: User) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithFacebook() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  loginWithGithub() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  loginWithTwitter() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return firebase.auth().currentUser;
  }
}
