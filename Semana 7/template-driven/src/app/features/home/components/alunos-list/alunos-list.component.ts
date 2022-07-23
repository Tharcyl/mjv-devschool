import { Component, OnInit } from '@angular/core';
import { AlunosService } from 'src/app/shared/services/alunos.service';
import { Aluno } from '../../models/home.models';

@Component({
  selector: 'app-alunos-list',
  templateUrl: './alunos-list.component.html',
  styleUrls: ['./alunos-list.component.scss']
})
export class AlunosListComponent implements OnInit {

  alunos: Array<Aluno> = this.alunosService.getAlunos();




  constructor(private alunosService: AlunosService) { }

  ngOnInit(): void {
  }

}
