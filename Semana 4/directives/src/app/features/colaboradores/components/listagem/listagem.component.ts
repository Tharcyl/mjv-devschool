import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../../models/colaboradores.model';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

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

  mostraNome(){
    this.exibeNome = !this.exibeNome
  }

}
