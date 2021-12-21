/**
 * Users Data Service
 *
 * Uses embedded, hard-coded data model; acts asynchronously to simulate remote data service call(s).
 *
 */
import axios, {AxiosResponse} from 'axios';
import {User} from '../users.module';

export class UsersService {

  /**
   * Returns a promise which asynchronously loads the list of users.
   *
   * @returns {IPromise<AxiosResponse<>{name: string, avatar: string, content: string}[]>>}
   */
  loadAllUsers(): Promise<AxiosResponse<User[]>> {
    return axios.get('assets/mocks/users.json');
  }
}

