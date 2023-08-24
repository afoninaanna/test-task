import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  formGroup: FormGroup

  @Input() formError = 'Введите логин и пароль. Длина от 4 до 10 символов. Только латинские цифры и буквы.'

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10), Validators.pattern(/^[а-яА-ЯёЁa-zA-Z0-9]+$/)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10), Validators.pattern(/^[а-яА-ЯёЁa-zA-Z0-9]+$/)])
    })
  }

  onFormChange() {
    if (this.formGroup.valid) {
      this.formError = ''
    }
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }
}