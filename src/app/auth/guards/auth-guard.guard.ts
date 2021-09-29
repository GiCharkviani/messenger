import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/shared/storage.service';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
  constructor(private router: Router, private storageService: StorageService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    if(state.url === '/auth/login'){

      if (!this.storageService.localActiveUser(false)) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }

    }else if(state.url === "/home" || state.url === "/chat" || state.url){
      if (this.storageService.localActiveUser(false)) {
        return true;
      } else {
        this.router.navigate(['auth/login']);
        return false;
      }
    }

  }
}
