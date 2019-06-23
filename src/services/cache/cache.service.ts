import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  window: { [key: string]: any } = window

  constructor() {
  }

  add(key, value) {
    this.window.localStorage.setItem(key, JSON.stringify({ data: value }));
  }

  get(key) {
    const { data = null } = JSON.parse(this.window.localStorage.getItem(key)) || {};
    return data;
  }

  has(key) {
    return !!this.get(key);
  }

  delete(key) {
    this.window.localStorage.removeItem(key);
  }
}
