import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/interfaces/UserLogin';
import { ApiService } from '../../api/api.service';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private usersService: UsersService, private router: Router) {}

  async signinUser(userData: UserLogin): Promise<UserLogin | undefined> {
    const { users } = await this.usersService.getUsers();
    const isExist = users.find(
      (_) => _.email === userData.email && _.password === userData.password
    );
    return isExist;
  }

  signoutUser(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/signin'], { replaceUrl: true });
  }
}
