import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  public registrationForm !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder
      .group({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        mobile: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
      })
  }

  register() {
    this.authService.register(this.registrationForm.value)
  }

}
