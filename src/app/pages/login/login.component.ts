import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private router = inject(Router);

  propEmail: FormControl = new FormControl<string>('', [
    Validators.required,
    Validators.email
  ]);
  propPassword: FormControl = new FormControl<string>('', [
    Validators.required,
    Validators.minLength(8)
  ]);
  propRemember: FormControl = new FormControl<boolean>(false);

  form: FormGroup = new FormGroup({
    email: this.propEmail,
    password: this.propPassword
  })

  submitted = false;

  login() {
    this.submitted = true
    if (this.form.invalid) return;
    console.log(this.form.value)
    // this.router.navigateByUrl('/');
  }
}
