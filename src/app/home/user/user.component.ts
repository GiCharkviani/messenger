import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { StorageService } from 'src/app/shared/storage.service';
import { UserModel } from 'src/app/shared/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  your: UserModel;

  constructor(private authService: AuthService, private storageService: StorageService) {}

  //sign-out function
  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.your = this.storageService.localActiveUser(true)
  }

}
