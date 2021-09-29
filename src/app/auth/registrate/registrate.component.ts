import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import * as authEnum from '../auth.enum';
import { newUser } from './newUser.model';
import { initializeApp } from 'firebase/app';
import { environment } from '../../../environments/environment';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.css'],
})
export class RegistrateComponent implements OnInit {
  //Firebase valueCheck
  private fireApp = initializeApp(environment.firebaseConfig);

  //firebase storage
  storage = getStorage(this.fireApp);
  storageRef = ref(this.storage);

  //reg form
  registrationForm: FormGroup;

  // error message
  error: string;

  // successfull page
  successfull: boolean = false;

  //spinner
  loading: boolean;

  //img url
  imgEl: any;
  imgFile: any;

  constructor(
    private authService: AuthService,
    private cd: ChangeDetectorRef
  ) {}

  //registration Function
  registrate() {
    this.loading = true;

    const newUser: newUser = {
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password,
      name: this.registrationForm.value.name,
      img: '',
    };

    //uploading img
    uploadBytesResumable(
      ref(this.storage, 'users/' + newUser.email),
      this.imgFile
    ).then((res) => {
      // getting url
      getDownloadURL(res.ref).then((imgUrl) => {
        // img ref in object
        newUser.img = imgUrl;
        //registrationCall
        this.registerCall(newUser);
      });
    });
  }

  registerCall(newUser) {
    this.authService
      .registrate(newUser)
      .then((res) => {
        this.registrationForm.reset();
        this.error = '';
        this.loading = false;
        this.successfull = true;
      })
      .catch((error) => {
        this.loading = false;
        switch (error.message) {
          case authEnum.Reg.inUse:
            this.error = authEnum.RegRes.inUse;
            break;
          default:
            this.error = error.message;
            break;
        }
      });
  }


  alert:boolean;

  imgUpload(img) {
    let reader = new FileReader();
    if (img.target.files && img.target.files.length) {
      const [file] = img.target.files;
      if(file.size < 1000000){
        this.alert = false;

        this.imgFile = file;

        reader.readAsDataURL(file);

        reader.onload = () => {
          this.registrationForm.patchValue({
            file: 'true',
          });
          this.imgEl = reader.result;
        };
        this.cd.markForCheck();
      }else {
        this.registrationForm.patchValue({
          file: '',
        });
        img.target.value = ''
        this.imgEl = ''
        this.alert = true
      }

    }
  }

  ngOnInit(): void {
    //reactive Form initialization
    this.registrationForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      name: new FormControl(null, Validators.required),
      file: new FormControl(null, Validators.required),
    });
  }
}
