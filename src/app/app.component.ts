import { DOCUMENT } from '@angular/common';
import { Component, ElementRef,Inject,OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  title = 'messenger';
  theme:boolean = false;
  icon:boolean = false;

  constructor(private elRef: ElementRef<HTMLElement>, @Inject(DOCUMENT) private document:any){}


  changeColor(){
    this.theme = !this.theme;
    this.icon = !this.icon;

    if(this.theme){
      localStorage.setItem("dark", "true")

      this.document.body.style.backgroundColor = 'black'

      this.elRef.nativeElement.style.setProperty("--header-background-color", "#144552")
      this.elRef.nativeElement.style.setProperty("--header-color", "white")
      this.elRef.nativeElement.style.setProperty("--header-logout-color", "white")
      this.elRef.nativeElement.style.setProperty("--header-i-hover-color", "#312244")

      this.elRef.nativeElement.style.setProperty("--users-cards-holder-background-color", "black")
      this.elRef.nativeElement.style.setProperty("--users-registrated-user-background-color", "rgba(115, 87, 236, 0.945)")
      this.elRef.nativeElement.style.setProperty("--users-registrated-user-text-color", "white")
      this.elRef.nativeElement.style.setProperty("--users-registrated-user-title-color", "white")
      this.elRef.nativeElement.style.setProperty("--users-registrated-user-color", "#006466")
      this.elRef.nativeElement.style.setProperty("--posts-background", "black")

      this.elRef.nativeElement.style.setProperty("--chat-main-background-color", "black")
      this.elRef.nativeElement.style.setProperty("--chat-color", "white")
      this.elRef.nativeElement.style.setProperty("--chat-user-list-background-color", "black")
      this.elRef.nativeElement.style.setProperty("--chat-user-list-color", "white")
      this.elRef.nativeElement.style.setProperty("--chat-send-message-field", "black")
      this.elRef.nativeElement.style.setProperty("--userListColor", "black")
      this.elRef.nativeElement.style.setProperty("--searchInputColor", "white")

      this.elRef.nativeElement.style.setProperty("--light", "#006466")

    }else{
      localStorage.removeItem("dark")

      this.document.body.style.backgroundColor = 'white'

      this.elRef.nativeElement.style.removeProperty("--header-background-color")
      this.elRef.nativeElement.style.removeProperty("--header-color")
      this.elRef.nativeElement.style.removeProperty("--header-logout-color")
      this.elRef.nativeElement.style.removeProperty("--header-i-hover-color")

      this.elRef.nativeElement.style.removeProperty("--users-cards-holder-background-color")
      this.elRef.nativeElement.style.removeProperty("--users-registrated-user-background-color")
      this.elRef.nativeElement.style.removeProperty("--users-registrated-user-text-color")
      this.elRef.nativeElement.style.removeProperty("--users-registrated-user-title-color")
      this.elRef.nativeElement.style.removeProperty("--users-registrated-user-color")
      this.elRef.nativeElement.style.removeProperty("--posts-background")

      this.elRef.nativeElement.style.removeProperty("--chat-main-background-color")
      this.elRef.nativeElement.style.removeProperty("--chat-color")
      this.elRef.nativeElement.style.removeProperty("--chat-user-list-background-color")
      this.elRef.nativeElement.style.removeProperty("--chat-user-list-color")
      this.elRef.nativeElement.style.removeProperty("--chat-send-message-field")
      this.elRef.nativeElement.style.removeProperty("--userListColor")
      this.elRef.nativeElement.style.removeProperty("--searchInputColor")

      this.elRef.nativeElement.style.removeProperty("--light")
    }
  }

  ngOnInit(){
    if(localStorage.getItem("dark")){
      this.changeColor()
    }
  }



}
