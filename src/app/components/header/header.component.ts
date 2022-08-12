import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { login, logout } from '../../state/auth/auth.actions';
import { setIsLoggedIn } from '../../state/app.actions';

import { Menu } from '../../TypeInterface'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  brand: string = "JOB PORTAL"
  role$: Observable<string>
  isLoggedIn$: Observable<boolean>

  menuItems: Menu[] = [
    { name: "Jobs", slug: "/jobs" }
  ]

  constructor(
    private store: Store<{ role: string }>,
    private status: Store<{ loginStatus: boolean }>
  ) {
    this.role$ =  this.store.select('role');
    this.isLoggedIn$ = this.status.select('loginStatus')
  }

  ngOnInit(): void {
    //this.store.dispatch(logout())
  }


}
