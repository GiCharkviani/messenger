import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { environment } from '../../environments/environment';

import {
  getDatabase,
  ref,
  set,
  child,
  get,
  push,
} from 'firebase/database';
import { UserModel } from './user.model';
import { PostModel } from '../home/posts/post.model';

@Injectable({ providedIn: 'root' })
export class StorageService {
  //initialization
  private fireApp = initializeApp(environment.firebaseConfig);
  private analytics = getAnalytics(this.fireApp);

  //firebase database
  database = getDatabase();

  //firbase Got database
  onDatabase = ref(this.database);

  constructor() {}

  //saving User
  saveOnDatabase(userInfo: UserModel) {
    set(ref(this.database, 'users/' + userInfo.uid), {
      email: userInfo.email,
      password: userInfo.password,
      name: userInfo.name,
      img: userInfo.img,
      regTime: new Date().getTime(),
      pm: [],
    });
  }
  //setLastLoginTime
  setLoginData(userInfo: any) {
    set(ref(this.database, 'users/' + userInfo + '/lastLogin'), {
      loginTime: new Date().getTime(),
    });
  }

  //getting User & Saving to localStorage
  getFromDatabase(uid: string) {
    return get(child(this.onDatabase, `users/${uid}`))
      .then((user) => {
        if (user.exists()) {
          const reformedUser = {
            name: user.val().name,
            email: user.val().email,
            img: user.val().img,
            uid: uid,
          };
          return reformedUser;
        }
      })
      .then((user) => {
        localStorage.setItem('active-user', JSON.stringify(user));
      });
  }

  //messages
  //startSendingMessage
  sendMessage(you, user, message) {
    set(push(ref(this.database, 'users/' + you + '/pm/' + user)), {
      from: you,
      to: user,
      message: message,
      timeStamp: new Date().getTime()
    });
    set(push(ref(this.database, 'users/' + user + '/pm/' + you)), {
      from: you,
      to: user,
      message: message,
      timeStamp: new Date().getTime()
    });


  }

  //getting user
  getUser(user:string){
    return get(child(this.onDatabase, 'users/' + user)).then(res => {
      return {
        name: res.val().name,
        img: res.val().img
      }
    })
  }


  // save post
  saveAndPost(post: PostModel){
    set(push(ref(this.database, 'posts/')), {post})
  }


  //local Storage
  localActiveUser(parse:boolean){
    if(parse){
      return JSON.parse(localStorage.getItem('active-user'))
    }
   return localStorage.getItem('active-user')
  }

}
