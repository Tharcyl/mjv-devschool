import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MotosService } from 'src/app/shared/services/motos.service';
import { Moto } from '../../models/moto.model';

@Component({
  selector: 'app-motos-list',
  templateUrl: './motos-list.component.html',
  styleUrls: ['./motos-list.component.scss']
})
export class MotosListComponent implements OnInit {

  motos: Array<Moto> = this.motosService.getMotos();

  constructor(private motosService: MotosService,
    private route: Router) { }

  ngOnInit(): void {
  }

  motoDetails(motoId: number){
  this.route.navigateByUrl(`moto-details/${ motoId }`)   
  }

}
