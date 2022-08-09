import { Component, OnInit } from '@angular/core';
import { Menu } from '../../TypeInterface'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loginReducer } from 'src/app/state/auth/auth.reducer';
import { isLoggedIn, login, logout } from '../../state/auth/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  brand: string = "PUBLIC"
  menuItems: Menu[] = []
  
  authStatus$: Observable<boolean> 
  
  constructor(private store: Store<{ authStatus: boolean}>) {
    this.authStatus$ = store.select('authStatus')
    /*this.authStatus$.subscribe(() => {
      console.log("Auth Status Changed")
    })*/
   }

  login() {
    this.store.dispatch(login())
  }
  logout() {
    this.store.dispatch(logout())
  }

  ngOnInit(): void {
  }

}
