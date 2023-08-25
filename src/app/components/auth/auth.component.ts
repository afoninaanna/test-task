import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnChanges {

  constructor(private authService: AuthService, private router: Router) {

  }

  formGroup: FormGroup

  @Input() formError = 'Введите логин и пароль. Длина от 4 до 10 символов. Только латинские цифры и буквы.'

  isLogged: Boolean = this.authService.isAuth

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10), Validators.pattern(/^[а-яА-ЯёЁa-zA-Z0-9]+$/)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10), Validators.pattern(/^[а-яА-ЯёЁa-zA-Z0-9]+$/)])
    })
    this.isLogged = this.authService.checkLogin();
    console.log('init:', this.isLogged);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('changes', this.isLogged);
  }

  onFormChange() {
    if (this.formGroup.valid) {
      this.formError = ''
    }
  }

  onSubmit() {
    const { login, password } = this.formGroup.value;
    this.authService.registr(login, password);
    this.isLogged = true;
  }

  logIn(): void {
    this.router.navigate(['/posts'], { queryParams: {allowed: 'true'}});
  }
}