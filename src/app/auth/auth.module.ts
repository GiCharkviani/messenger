import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { RegistrateComponent } from "./registrate/registrate.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AuthRoutingModule,
  ],
  declarations:[
    AuthComponent,
    LoginComponent,
    RegistrateComponent
  ],
  exports:[]
})

export class authModule {}
