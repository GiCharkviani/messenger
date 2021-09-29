import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { initializeApp } from 'firebase/app';
import { getAuth } from '@firebase/auth';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //initialization
  private fireApp = initializeApp(environment.firebaseConfig);
  //firebase Auth
  Auth = getAuth();


  constructor() { }

  ngOnInit(): void {
  }

}
