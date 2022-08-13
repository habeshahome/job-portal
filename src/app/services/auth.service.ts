import { Injectable } from '@angular/core';
import { of, delay } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PermissionService } from './permission.service';
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store';
import { login, logout } from '../state/auth/auth.actions';
import { setUser, setAdmin, setPublic } from '../state/app.actions';

//import {Injector} from '@angular/core';
import { UserModel } from '../models/UserModel'
import { Router } from '@angular/router'
import { baseUrl } from '../api/config';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginStatus$: Observable<boolean>

  loginResponse: any = []
  registerResponse: any = []
  accessToken: string = ''
  responseData: any = []
  user: { name: string, email: string, mobile: string, role: string, _id: string }
    = {
      name: "",
      email: "",
      mobile: "",
      role: "PUBLIC",
      _id: ''
    }
  status = false
  api_login_url = baseUrl + "auth/login"
  api_register_url = baseUrl + "auth/register"

  constructor(
    private httpClient: HttpClient,
    private permissionService: PermissionService,
    private router: Router,
    private store: Store<{ loginStatus: boolean }>
  ) {
    this.loginStatus$ = this.store.select('loginStatus');
    this.loginStatus$.subscribe(status => this.status = status)
  }

  // jwt authentication here
  isLoggedIn() {
    console.log("Is Logged In: " + this.status)
    //return of(false).pipe(delay(100));
    if (this.status)
      return of(true).pipe(delay(10))
    else
      return of(false).pipe(delay(10));
  }


  login(email: string, password: string) {
    //console.log(" Login Service Recieved: " + email + " " + password);

    const httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')

    this.httpClient
      .post(
        this.api_login_url,
        JSON.stringify({
          email: email,
          password: password
        }),
        { headers: httpHeaders }
      )
      .subscribe(res => {
        this.responseData = res
        this.user = this.responseData[1].user
        this.accessToken = this.responseData[0].accessToken
        this.setLocals()

        if (this.user.role === "USER") {
          this.store.dispatch(setUser())
          this.store.dispatch(login()) // setting login status
          this.permissionService.isUser()
          this.router.navigate(['/user/applied-jobs'])
        }
        else if (this.user.role === "ADMIN") {
          this.store.dispatch(setAdmin())
          this.store.dispatch(login()) // setting login status
          this.permissionService.isAdmin()
          this.router.navigate(['/admin']);
        }
      });
  }

  register(user: UserModel) {
    // by default - registering users not admins
    console.log("Inside Registration Service ")
    console.log(user)

    const httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')

    this.httpClient
      .post(
        this.api_register_url,
        user,
        { headers: httpHeaders })
        .subscribe(res => {
          this.responseData = res
          this.user = this.responseData[1].user
          this.accessToken = this.responseData[0].accessToken
          this.setLocals()
  
          if (this.user.role === "USER") {
            this.store.dispatch(setUser())
            this.store.dispatch(login()) // setting login status
            this.permissionService.isUser()
            this.router.navigate(['/user/applied-jobs'])
          }
          else if (this.user.role === "ADMIN") {
            this.store.dispatch(setAdmin())
            this.store.dispatch(login()) // setting login status
            this.permissionService.isAdmin()
            this.router.navigate(['/admin']);
          }
        });
  }

  logout() {
    console.log("Logging out...")
    this.clearLocals()
    this.store.dispatch(logout())// setting login status
    this.store.dispatch(setPublic())
    this.router.navigate(['/'])
  }

  setLocals() {
    console.log("Configuring - locals")
    localStorage.setItem('email', this.user.email)
    localStorage.setItem('mobile', this.user.mobile)
    localStorage.setItem('isLoggedIn', "true")
    localStorage.setItem('role', this.user.role)
    localStorage.setItem('accessToken', this.accessToken)
    localStorage.setItem('_id', this.user._id)
    this.store.dispatch(login())
  }
  clearLocals() {
    localStorage.clear()
    localStorage.setItem('isLoggedIn', "false")
    this.store.dispatch(setPublic())
  }

}

