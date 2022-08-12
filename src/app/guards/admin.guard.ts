import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, delay } from 'rxjs';
import { PermissionService } from '../services/permission.service';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivateChild {
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
    // check if has permission of user or admin 
    //return of(true).pipe(delay(500));
    console.log("Admin Guard: sending permission request...")
    return this.permission.isAdmin()
  }

}
