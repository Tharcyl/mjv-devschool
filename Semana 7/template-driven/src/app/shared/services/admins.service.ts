import { Injectable } from '@angular/core';
import { Admin } from '../models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  admins: Array<Admin> = [
    {
      id: 1,
      nome: 'Nathan',
      email: 'nathan@gmail.com',
      senha: '123456'
    },
    {
      id: 2,
      nome: 'Alan',
      email: 'alan@gmail.com',
      senha: '123456'
    }
  ];

  constructor() { }

  getAdmins(){
    this.admins;
  }

  getAdminByEmailAndSenha(email: string, senha: string){
    return this.admins.find((admin) => admin.email === email && admin.senha === senha);
  }

}
