import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/guards/auth-guard.guard";

import { ChatComponent } from "./chat.component";
import { ChattingComponent } from "./chatting/chatting.component";

const routes: Routes = [

  { path: '', component: ChatComponent, canActivate:[AuthGuard], children:[
    {path: ':id', component: ChattingComponent}
  ]},

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ChatRoutingModule {}
