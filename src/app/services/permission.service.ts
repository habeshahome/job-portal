import { Injectable } from '@angular/core';
import { of , delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor() { }

  hasPermission() {
    return of(true).pipe(delay(500));
  }
}
