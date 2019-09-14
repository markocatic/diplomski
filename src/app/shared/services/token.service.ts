import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
  private iss = {
    login: 'http://localhost:8000/api/login',
    signup: 'http://localhost:8000/api/signup'
  };

  constructor() {}

  handle(token) {
    this.set(token);
  }

  handleUser(user) {
    this.setUser(user);
  }

  set(token) {
    localStorage.setItem('token', token);
  }

  setUser(user) {
    localStorage.setItem('user', user);
  }

  get() {
    let token = localStorage.getItem('token');
    console.log(token, 'TOKEN1');
    return token;
  }

  getUser() {
    let user = localStorage.getItem('user');
    console.log(user);
    return user;
  }

  remove() {
    localStorage.removeItem('token');
  }

  removeUser() {
    localStorage.removeItem('user');
  }

  isValid() {
    const token = this.get();
    console.log(token, 'TOKEN2');
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }
}
