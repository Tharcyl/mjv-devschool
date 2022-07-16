import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../../models/colaborador.model';

@Component({
  selector: 'app-colaboradores-list',
  templateUrl: './colaboradores-list.component.html',
  styleUrls: ['./colaboradores-list.component.scss']
})
export class ColaboradoresListComponent implements OnInit {

  colaboradores: Array<Colaborador> = [
    {
      id: 1,
      nome: 'Nathan Carlos Exercicio',
      salario: 4500,
      cargo: 'Dev Pl'
    },
    {
      id: 2,
      nome: 'Alan Jhonnes',
      salario: 3700,
      cargo: 'Dev Sr'
    },
    {
      id: 3,
      nome: 'Tharcyl Santos',
      salario: 2500,
      cargo: 'Estagiário'
    }
  ]

  exibeNome: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
}
