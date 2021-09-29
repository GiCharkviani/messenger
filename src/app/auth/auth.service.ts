import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { environment } from '../../environments/environment';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { StorageService } from '../shared/storage.service';
import { Router } from '@angular/router';
import { newUser } from './registrate/newUser.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  //initialization
  private fireApp = initializeApp(environment.firebaseConfig);
  private analytics = getAnalytics(this.fireApp);

  //firebase Auth
  Auth = getAuth();

  constructor(private storage: StorageService, private router: Router) {}

  //Registration
  registrate(newUser: newUser) {
    return createUserWithEmailAndPassword(this.Auth, newUser.email, newUser.password)
      .then((res) => {
        const userInfo = {
          uid: res.user.uid,
          email: newUser.email,
          password: newUser.password,
          name: newUser.name,
          img: newUser.img,
        };
        this.storage.saveOnDatabase(userInfo);
      })
  }

  //Authorization
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.Auth, email, password)
      .then((res) => {
        this.storage.getFromDatabase(this.Auth.currentUser.uid).then((res) => {
          this.router.navigate(['home']);
        });
        return res
      })
  }

  //Sign-out
  logout() {
    signOut(this.Auth).then((res) => {
      localStorage.removeItem('active-user');
      this.router.navigate(['/auth/login']);
    });
  }


}
