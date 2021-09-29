import { Directive, ElementRef, Input, NgModule, OnInit, Renderer2 } from "@angular/core";
import { StorageService } from "../storage.service";

@Directive({
  selector: '[me]'
})

export class MessageDirective implements OnInit {

  @Input() messageOwnerId: string;

  activeUer = this.storageService.localActiveUser(true)

  constructor(private elRef: ElementRef, private renderer: Renderer2, private storageService: StorageService){}

  ngOnInit(){
    if(this.messageOwnerId === this.activeUer.uid){
      this.renderer.addClass(this.elRef.nativeElement, 'me')
      this.renderer.addClass(this.elRef.nativeElement, 'thisMe')
    }else{
      this.renderer.addClass(this.elRef.nativeElement, 'this')
    }
  }
}

@NgModule({
  declarations: [MessageDirective],
  exports: [MessageDirective]
})

export class MessageDirectiveModule{}
