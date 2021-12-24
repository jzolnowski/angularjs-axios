import axios, {AxiosResponse} from 'axios';
import {User} from '../users.module';

export class UsersService {
  loadAllUsers(): Promise<AxiosResponse<User[]>> {
    return axios.get('assets/mocks/users.json');
  }
}

