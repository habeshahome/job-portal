import { Injectable } from '@angular/core';
import { of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  // jwt authentication here
  isLoggedIn() {
    return of(true).pipe(delay(500));
  }
}
