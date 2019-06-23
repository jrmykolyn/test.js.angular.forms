import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  data: { username: string, password: string } = { username: '', password: '' }

  constructor() {
  }

  ngOnInit() {
  }

  updateUsername(e) {
    this.data.username = e.target.value;
  }

  updatePassword(e) {
    this.data.password = e.target.value;
  }

  isValid(data): boolean {
    return Object.keys(data)
      .reduce((isValid: boolean, key: string) => {
        if (!isValid) return isValid;

        const value = data[key];

        switch (key) {
          case 'username':
            return !!(value && value.length >= 3);
          case 'password':
            return !!(value && value.length >= 3);
          default:
            return true;
        }
      }, true);
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.isValid(this.data)) {
      console.log('__ DATA IS VALID');
    } else {
      console.log('__ DATA IS NOT VALID');
    }
  }
}
