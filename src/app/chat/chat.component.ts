import { Component, OnInit } from '@angular/core';
import { trigger, state, style } from '@angular/animations';
import { environment } from '../../environments/environment';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  animations: [
    trigger('divState', [
      state(
        'move',
        style({
          display: 'inline-block',
          position: 'absolute',
          width: '100%',
          backgroundColor: 'white',
        })
      ),
    ]),
  ],
})
export class ChatComponent implements OnInit {
  //initialization
  private fireApp = initializeApp(environment.firebaseConfig);

  //firebase Auth
  Auth = getAuth();

  //animation state
  state: string = 'normal';

  //responsive icon
  iconChange: boolean = true;

  //Animating function
  show() {
    this.state === 'normal' ? (this.state = 'move') : (this.state = 'normal');
  }

  // select chat
  selectChat: boolean = false;

  activeUser = {
    name: 'Loading...',
    img: 'https://cdn.iconscout.com/icon/free/png-256/incognito-6-902117.png',
  };

  gotUser(user) {
    if (user) {
      this.activeUser = user;
      this.selectChat = false;
    } else {
      this.activeUser = {
        name: 'TextMeToSeeMe',
        img: 'https://cdn.iconscout.com/icon/free/png-256/incognito-6-902117.png',
      };
      this.selectChat = false;
    }
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    if (this.activeUser.name == 'Loading...') {
      this.selectChat = true;
    }

    if(this.route.firstChild?.snapshot.params['id']){
      this.gotUser(undefined);
    }

  }
}
