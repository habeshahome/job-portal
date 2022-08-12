import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public loginForm !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,  
    private router: Router
    ) { }
  
  login() {
    console.log(this.loginForm.value.email + " " + this.loginForm.value.password)
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder
      .group({
        email: new FormControl('', [Validators.required]),  
        password: new FormControl('', [Validators.required]), 
      })
  }

}
