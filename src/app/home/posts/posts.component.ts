import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StorageService } from 'src/app/shared/storage.service';
import { PostModel } from './post.model';
import { initializeApp } from 'firebase/app';
import { environment } from '../../../environments/environment';
import {
  getDatabase,
  ref,
  onValue,
  runTransaction,
} from 'firebase/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  //Firebase valueCheck
  private fireApp = initializeApp(environment.firebaseConfig);

  //firebase database
  database = getDatabase();
  dbRef = ref(this.database);

  // access HTML element
  @ViewChild('input') inputEl: ElementRef;

  // posts array
  postsArr: any = [];

  // current user
  currentUser = this.storageService.localActiveUser(true);

  // loading
  loading: boolean = false;

  constructor(private storageService: StorageService, private router: Router) {}

  ngOnInit() {
    this.loading = true;
    this.getPosts();
  }

  // adding posts function
  addPost(text) {
    if (text) {
      const newPost = new PostModel(
        this.currentUser.name,
        this.storageService.localActiveUser(true).uid,
        this.currentUser.img,
        text,
        { num: 0, auth: ['user'] }
      );
      this.postsArr.unshift(newPost);
      this.storageService.saveAndPost(newPost);
      this.inputEl.nativeElement.value = '';
    }
  }

  // text from picture
  textHim(uid: string, element: ElementRef){
    if(uid !== this.storageService.localActiveUser(true).uid){
     return this.router.navigate(['chat', uid])
    }
    return false;
  }

  // getting posts
  getPosts() {
    onValue(ref(this.database, 'posts'), (snapshot) => {
      const snapshotGot = snapshot.val();

      let postsArray = [];
      for (let i in snapshotGot) {
        postsArray.push({ post: snapshotGot[i].post, key: i, liked: snapshotGot[i].post.likes.auth.find(found => found === this.currentUser.uid)});
      }
      postsArray.reverse();
      this.postsArr = postsArray;
      this.loading = false;
    });
  }

  giveLike(key: string) {
    runTransaction(ref(this.database, `posts/${key}`), (post) => {
      if (post) {
        if (post.post.likes.num >= 0) {
          const found = post.post.likes.auth.find((uid) => {
            return uid === this.currentUser.uid;
          });
          if (!found) {
            post.post.likes.num++;
            post.post.likes.auth.push(this.currentUser.uid);
          }else {
            post.post.likes.num--;
            let userIndex =  post.post.likes.auth.filter(item => item !== this.currentUser.uid);
            post.post.likes.auth = userIndex;
          }
        }
      }
      return post;
    });
  }
}
