import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { environment } from '../../../environments/environment';
import { getDatabase, ref, onValue } from 'firebase/database';
import { StorageService } from 'src/app/shared/storage.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  //Firebase valueCheck
  private fireApp = initializeApp(environment.firebaseConfig);

  //firebase database
  database = getDatabase();
  dbRef = ref(this.database);

  //Pm Users List
  pmUsersList: string[] = [];

  //localStorageUser
  currentUser = this.storageService.localActiveUser(true);

  //Spinner
  loading: boolean;

  //active user
  clickedPm: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.loading = true;

    this.updatePmUsers();

    this.clickedPm = this.route.snapshot.params['id'];
    if(this.route.firstChild){
      this.styleFunc()
    }
  }

  // style for selected user
  styleFunc(){
    this.route.firstChild.params.subscribe((params: Params) => {
      this.clickedPm = params['id'];
    });
  }

  //Update Check
  updatePmUsers() {
    onValue(
      ref(this.database, 'users/' + this.currentUser.uid + '/pm'),
      (snapshot) => {
        //users arr setup
        const pmUsers = snapshot.val();
        let usersArr: any = [];

        for (let i in pmUsers) {
          usersArr.push({ user: i, pm: [] });
          for (let j in pmUsers[i]) {
            for (let g in usersArr) {
              if (usersArr[g].user === i) {
                usersArr[g].pm = {
                  timestamp: pmUsers[i][j].timeStamp,
                  message: pmUsers[i][j].message,
                };
              }
            }
          }
        }

        usersArr.sort((a, b) => {
          return a.pm.timestamp - b.pm.timestamp;
        });
        usersArr.reverse();

        //fetching users
        if (usersArr.length >= 0) {
            this.fetchUsers(usersArr);
        } else {
          this.storageService
            .getUser(this.route.firstChild.snapshot.params['id'])
            .then((res) => {
              this.markedUser.emit({
                name: res.name,
                img: res.img,
              });
            });
        }
        //spinner
        this.loading = false;
      }
    );
  }

  //fetchUsers func
  fetchUsers(usersArr) {
    const expPmUsers = [];
    for (let i in usersArr) {
      onValue(
        ref(this.database, 'users/' + usersArr[i].user),
        (snapshot) => {
          expPmUsers.push({
            email: snapshot.val().email,
            id: usersArr[i].user,
            img: snapshot.val().img,
            name: snapshot.val().name,
            lastMessage: usersArr[i].pm.message,
          });
          this.pmUsersList = expPmUsers;
          this.updateTopUser(this.pmUsersList);
        },
        {
          onlyOnce: true,
        }
      );
    }
  }
  //send top user
  @Output() markedUser = new EventEmitter();

  //Selection to route function
  selectedUser(id: string, name: string, img: string) {
    this.router.navigate([id], { relativeTo: this.route });
    this.markedUser.emit({ name: name, img: img });
    setTimeout(()=>{
      this.styleFunc()
    }, 500)
  }

  //updating info in top user
  updateTopUser(pmUserList) {
    for (let i in pmUserList) {

      if(this.route.firstChild){
        if (pmUserList[i].id === this.route.firstChild.snapshot.params['id']) {
          this.markedUser.emit({
            name: pmUserList[i].name,
            img: pmUserList[i].img,
          });
          break;
        } else {
          this.storageService
            .getUser(this.route.firstChild.snapshot.params['id'])
            .then((res) => {
              this.markedUser.emit({
                name: res.name,
                img: res.img,
              });
            });
          break;
        }
      }

    }
  }
}
