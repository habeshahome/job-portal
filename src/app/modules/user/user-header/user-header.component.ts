import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';

import { Menu } from '../../../TypeInterface'

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  role$: Observable<string>
  constructor(
    private store: Store<{ role: string }>,
    private authService: AuthService
  ) {
    this.role$ = store.select('role');
  }

  brand: string = "Google Jobs"
  menuItems: Menu[] = [
    {
      name: 'Applied',
      slug: "applied-jobs"
    },
    {
      name: "Find Jobs",
      slug: "/jobs"
    }
  ]
  ngOnInit(): void {
  }

  logout() {
    this.authService.logout()
  }

}
