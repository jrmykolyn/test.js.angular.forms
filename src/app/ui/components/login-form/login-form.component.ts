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
}
