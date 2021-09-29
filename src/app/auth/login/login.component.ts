import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { StorageService } from "src/app/shared/storage.service";
import { AuthService } from "../auth.service";
import * as authEnum from '../auth.enum'
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  //login reactive form group
  loginForm: FormGroup;
  //error handling
  error: string;
  //spinner
  loading: boolean;

  constructor(private authService: AuthService, private storageService: StorageService){}

  //login function
  login(){
    this.loading = true;
    this.authService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    ).then(res=>{
      this.storageService.setLoginData(res.user.uid)
    }).catch(error => {
      this.loading = false;
      switch(error.message){
        case authEnum.Login.tooManyRequests:
          this.error = authEnum.LoginRes.tooManyRequests
          break;
        case authEnum.Login.wrongPassword:
          this.error = authEnum.LoginRes.wrongEmailOrPassword
          break;
        case authEnum.Login.wrongEmail:
          this.error = authEnum.LoginRes.wrongEmailOrPassword
          break;
        default:
          this.error = error.message
      }
    })
  }


  ngOnInit():void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    })
  }

}
