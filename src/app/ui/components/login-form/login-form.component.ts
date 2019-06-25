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
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    // Expose LoginFormComponent for debugging purposes.
    (window as any).__FORM__ = this;
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

    const data = Object.keys(this.form.controls)
      .reduce((acc, key) => ({ ...acc, [key]: this.form.controls[key].value }), {});

    if (this.isValid(data)) {
      console.log('__ DATA IS VALID');

      // Invalidate cached form data.
      this.cache.delete(this.id);
    } else {
      console.log('__ DATA IS NOT VALID');
    }
  }
}
