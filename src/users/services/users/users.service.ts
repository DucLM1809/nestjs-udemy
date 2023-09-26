import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  fetchUsers() {
    return [];
  }

  createUser(userDetails: CreateUserType) {
    return;
  }

  fetchUserById(id: number) {
    return null;
  }
}
