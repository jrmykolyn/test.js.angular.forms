import { Component, OnInit, ElementRef } from '@angular/core';
import { CacheService } from '../../../../services/cache/cache.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  id: string = 'LoginFormComponent'

  data: { username: string, password: string }

  constructor(
    private cache: CacheService,
    private el: ElementRef
  ) {
    if (this.cache.has(this.id)) {
      this.data = this.cache.get(this.id);
    } else {
      this.data = { username: '', password: '' };
    }

    // Expose LoginFormComponent for debugging purposes.
    (window as any).__FORM__ = this;
  }

  ngOnInit() {
    this.el.nativeElement.querySelector('#username').value = this.data.username;
    this.el.nativeElement.querySelector('#password').value = this.data.password;
  }

  updateUsername(e) {
    this.data.username = e.target.value;

    // Cache current username.
    this.cache.add(this.id, this.data);
  }

  updatePassword(e) {
    this.data.password = e.target.value;

    // Cache current password.
    this.cache.add(this.id, this.data);
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

      // Invalidate cached form data.
      this.cache.delete(this.id);
    } else {
      console.log('__ DATA IS NOT VALID');
    }
  }
}
