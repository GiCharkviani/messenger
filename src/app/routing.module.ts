import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.authModule)
  },

  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)
  },

  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class RoutingModule {}
