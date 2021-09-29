import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { NavComponent } from "./nav/nav.component";
import { PostsComponent } from "./posts/posts.component";
import { UserComponent } from "./user/user.component";
import { UsersComponent } from "./users/users.component";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    UsersComponent,
    PostsComponent,
    NavComponent
  ],
})

export class HomeModule {}
