import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AuthGuard } from "./guards/auth-guard.guard";
import { LoginComponent } from "./login/login.component";
import { RegistrateComponent } from "./registrate/registrate.component";


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registrate', component: RegistrateComponent },
    ],
  },
]


@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AuthRoutingModule {}
