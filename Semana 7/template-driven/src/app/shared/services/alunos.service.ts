import { Injectable } from '@angular/core';
import { Aluno } from 'src/app/features/home/models/home.models';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  alunos: Array<Aluno> = [
    {
      id: 1,
      nome: 'Nathan Carlos',
      valorMensalidade: 100,
      dataUltimoPgto: '2021-07-23',
      dataInclusaoSistema: '2021-07-01'
    },
    {
      id: 2,
      nome: 'Alan dos Santos',
      valorMensalidade: 50,
      dataUltimoPgto: '2021-05-19',
      dataInclusaoSistema: '2021-04-01'
    },
    {
      id: 3,
      nome: 'Israel Silva',
      valorMensalidade: 200,
      dataUltimoPgto: '2021-04-23',
      dataInclusaoSistema: '2020-07-01'
    },
    {
      id: 4,
      nome: 'Ana Beatriz',
      valorMensalidade: 150,
      dataUltimoPgto: '2020-07-23',
      dataInclusaoSistema: '2019-09-25'
    },
    {
      id: 5,
      nome: 'Arthur do Val',
      valorMensalidade: 100,
      dataUltimoPgto: '2021-02-23',
      dataInclusaoSistema: '2020-12-01'
    },
    {
      id: 6,
      nome: 'Junior Lima',
      valorMensalidade: 200,
      dataUltimoPgto: '2021-01-31',
      dataInclusaoSistema: '2020-09-06'
    }
  ]

  constructor() { }

  getAlunos(){
    return this.alunos;
  }
}
