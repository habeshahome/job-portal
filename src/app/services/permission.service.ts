import { Injectable } from '@angular/core';
import { of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PermissionService {

  constructor() { }

  isUser() {
    console.log("Checking User permission")

    if (localStorage.getItem('role') === "USER") {
      console.log("passed")
      return of(true).pipe(delay(100));
    }
    else {
      console.log("failed to authorize")
      return of(false).pipe(delay(100));
    }

  }

  isAdmin() {
    console.log("Checking Admin permission")

    if (localStorage.getItem('role') === "ADMIN") {
      console.log("passed")
      return of(true).pipe(delay(100));
    }
    else {
      console.log("failed to authorize")
      return of(false).pipe(delay(100));
    }

  }

}
