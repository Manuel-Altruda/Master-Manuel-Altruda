import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): boolean {

    return true;

  }

  register(username: string, password: string): boolean {

    return true;

  }

}
