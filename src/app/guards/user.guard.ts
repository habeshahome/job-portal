import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PermissionService } from '../services/permission.service';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivateChild {
  role$: Observable<string>

  constructor(
    private permission: PermissionService,
    private router: Router,
    private store: Store<{ role: string }>
  ) {
    this.role$ = store.select('role');
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log("User Guard: sending permission request...")
    return this.permission.isUser()
  }

}
