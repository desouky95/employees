import { Injectable } from '@angular/core';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private localStorage: LocalStorageService) {}

  isUserAuthenticated(): boolean {
    return localStorage.getItem('user') ? true : false;
  }
}
