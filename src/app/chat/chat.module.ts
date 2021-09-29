import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MessageDirectiveModule } from "../shared/directives/message.directive";
import { ChatRoutingModule } from "./chat-routing.module";
import { ChatComponent } from "./chat.component";
import { ChattingComponent } from "./chatting/chatting.component";
import { UserListComponent } from "./user-list/user-list.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChatRoutingModule,
    MessageDirectiveModule
  ],
  declarations:[
    ChatComponent,
    UserListComponent,
    ChattingComponent
  ],
  exports: []
})

export class ChatModule {}
