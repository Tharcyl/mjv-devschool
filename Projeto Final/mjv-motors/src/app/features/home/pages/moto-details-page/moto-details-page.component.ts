import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MotosService } from 'src/app/shared/services/motos.service';
import { Moto } from '../../models/moto.model';

@Component({
  templateUrl: './moto-details-page.component.html',
  styleUrls: ['./moto-details-page.component.scss']
})
export class MotoDetailsPageComponent implements OnInit {

  moto?: Moto;


  constructor(private activatedRoute: ActivatedRoute,
    private motosService: MotosService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      console.log(params)
      const id = parseInt(params['motoId']);
      this.moto = this.motosService.getById(id);
      console.log(this.moto)
    });
  }

  
}
