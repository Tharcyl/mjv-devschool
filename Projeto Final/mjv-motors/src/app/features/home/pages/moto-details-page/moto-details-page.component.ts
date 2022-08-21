import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MotosService } from 'src/app/shared/services/motos.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { Moto } from '../../../../shared/models/moto.model';

@Component({
  templateUrl: './moto-details-page.component.html',
  styleUrls: ['./moto-details-page.component.scss']
})
export class MotoDetailsPageComponent implements OnInit {

  moto?: Moto;
  user?: boolean;


  constructor(private activatedRoute: ActivatedRoute,
    private motosService: MotosService,
    private userService: UsersService) { 
      
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      console.log(params)
      const id = parseInt(params['motoId']);
      this.moto = this.motosService.getById(id);
      console.log(this.moto)
    });

    this.verification();
    console.log(this.user)
  
  }


  
  verification(){
    const ver = sessionStorage.getItem('user');
    if(ver){
      return this.user = true
    }
    return this.user = false;
  };
}
