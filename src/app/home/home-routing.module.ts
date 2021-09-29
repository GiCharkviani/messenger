import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/guards/auth-guard.guard";
import { HomeComponent } from "./home.component";
import { PostsComponent } from "./posts/posts.component";
import { UsersComponent } from "./users/users.component";


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate:[AuthGuard], children: [
    {path: '', component: PostsComponent},
    {path: 'users', component: UsersComponent}
  ]},
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {}
