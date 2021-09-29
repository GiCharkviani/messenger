import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { environment } from '../../../environments/environment';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth } from '@firebase/auth';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/storage.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  //Firebase valueCheck
  private fireApp = initializeApp(environment.firebaseConfig);

  //firebase database
  database = getDatabase();

  //firebase Auth
  Auth = getAuth();

  //users array
  registratedUsers: {}[];

  //local storage
  currentUser = this.storageService.localActiveUser(true);

  //spinner
  loading: boolean;

  constructor(private router: Router, private storageService: StorageService, private http: HttpClient) {}

  //registrated users archive
  regUsers;

  ngOnInit(): void {
    this.loading = true;
    onValue(ref(this.database, 'users'), (snapshot) => {
      const usersArray = [];
      for (let i in snapshot.val()) {
        if (i === this.currentUser.uid) {
          continue;
        } else {
          usersArray.push({
            name: snapshot.val()[i].name,
            img: snapshot.val()[i].img,
            reg: snapshot.val()[i].regTime,
            id: i,
          });
          this.sorting(usersArray);
        }
      }
      this.loading = false;
      this.regUsers = usersArray;
      this.registratedUsers = usersArray;
    });
  }

  route(userId: string) {
    this.router.navigate(['/chat', userId]);
  }

  //sorting function
  sorting(pmUsers2) {
    pmUsers2.sort((a, b) => {
      let x = a.reg;
      let y = b.reg;
      return x === y ? 0 : x > y ? -1 : 1;
    });
  }

  //search
  search(input) {
    let users = this.regUsers;
    this.registratedUsers = users.filter((user) => {
      let name = user.name.toLowerCase();
      return name.includes(input.target.value.toLowerCase());
    });
  }
}
