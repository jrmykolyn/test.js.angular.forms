import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CacheService } from '../../../../services/cache/cache.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  id: string = 'LoginFormComponent'

  form: any

  constructor(
    private cache: CacheService,
  ) {
    const cachedData = this.cache.has(this.id) ? this.cache.get(this.id) : {};
    const { username = '', password = '' } = cachedData;

    this.form = new FormGroup({
      username: new FormControl(username, [Validators.required]),
      password: new FormControl(password, [Validators.required]),
    });

    // Subscribe to input field changes; update cache.
    const put = (v) => this.cache.add(this.id, this.serialize(this.form));
    this.form.controls.username.valueChanges.subscribe(put);
    this.form.controls.password.valueChanges.subscribe(put);

    // Expose LoginFormComponent for debugging purposes.
    (window as any).__FORM__ = this;
  }

  serialize(form) {
    return Object.keys(form.controls)
      .reduce((acc, key) => ({ ...acc, [key]: form.controls[key].value }), {});
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

    const data = this.serialize(this.form);

    if (this.isValid(data)) {
      console.log('__ DATA IS VALID');

      // Invalidate cached form data.
      this.cache.delete(this.id);
    } else {
      console.log('__ DATA IS NOT VALID');
    }
  }
}
