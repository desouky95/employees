import { ApiService } from './../../api/api.service';
import { Injectable } from '@angular/core';
import { UserLogin } from 'src/app/interfaces/UserLogin';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private api: ApiService) {}

  async getUsers(): Promise<{ users: UserLogin[] }> {
    return await this.api.getAsync('./assets/data/users.json');
  }
}
