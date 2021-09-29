import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StorageService } from 'src/app/shared/storage.service';
import { initializeApp } from 'firebase/app';
import { environment } from '../../../environments/environment';
import { getDatabase, ref, onValue } from 'firebase/database';
import { ScrollerService } from 'src/app/shared/scroller.service';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.css'],
})
export class ChattingComponent implements OnInit, AfterViewInit {
  //Firebase valueCheck
  private fireApp = initializeApp(environment.firebaseConfig);

  //firebase database
  database = getDatabase();

  //chat
  PrivateMessages: string[];

  //spinner
  loading: boolean;

  //local storage
  activeUser = this.storageService.localActiveUser(true);

  @ViewChild('chatContainer') chatContainer: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private storageService: StorageService,
    private scroller: ScrollerService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe((params: Params) => {
    this.valueChange(params['id']);
    });
  }

  //for scrolling
  ngAfterViewInit() {
    this.scroller.scroller(this.chatContainer, 1, 'smooth')
  }

  //Changes checking
  valueChange(params:string) {
     onValue(
      ref(
        this.database,
        'users/' + this.activeUser.uid + '/pm/' + params
      ),
      (snapshot) => {
        let pm = snapshot.val();
        let pmArray = [];
        for (let i in pm) {
          pmArray.push(pm[i]);
        }
        this.PrivateMessages = pmArray;
        this.loading = false;

        this.route.params.subscribe((params: Params) => {
          this.scroller.scroller(this.chatContainer, 0, 'auto');
        });
      }
    );
  }


  //sending message function
  sendMessage(message) {
    const you = this.activeUser.uid;
    this.storageService.sendMessage(
      you,
      this.route.snapshot.params['id'],
      message.value
    );
    message.value = '';
    this.scroller.scroller(this.chatContainer, .5, 'auto');
    return false;
  }
}
