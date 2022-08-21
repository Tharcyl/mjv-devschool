import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<User> = [
    {
      nome: 'Tharcyl',
      email: 'tharcyl@gmail.com',
      senha: '123456'
    },
  ]


  constructor() { }

  getUsers() {
    return this.users;
  }

  getUSerByEmailAndPassword(email: string, senha: string){
    return this.users.find(user => user.email === email && user.senha === senha);
  }

}
