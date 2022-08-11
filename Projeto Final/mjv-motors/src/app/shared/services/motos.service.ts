import { Injectable } from '@angular/core';
import { Moto } from 'src/app/features/home/models/moto.model';

@Injectable({
  providedIn: 'root'
})
export class MotosService {

  motos: Array<Moto> = [
    {
      id: 1,
      nome: 'NRX Bros',
      cilindrada: 160,
      marca: 'Honda',
      precoSugerido: 17000,
      descricao: 'A Honda apresentou a Bros 160 em substituição a Bros 150, que deixava de ser fabricada na época. O modelo tinha novo motor de um cilindro, equipado com partida elétrica, injeção eletrônica de combustível, comando de válvulas roletado e refrigeração a ar. Isso sem falar da novidade, a tecnologia flex, que possibilitava rodar com etanol/gasolina ou a mistura dos combustíveis em qualquer proporção. Mais tarde a linha ganhou mais novidades, como a introdução do sistema de frenagem combinada CBS (Combined Break System).',
      imagem: 'https://www.motonline.com.br/storage/guides/honda/nxr-bros-160.jpg',
    },
    {
      id: 2,
      nome: 'XTZ Crosser',
      cilindrada: 150,
      marca: 'Yamaha',
      precoSugerido: 17800,
      descricao: 'A XTZ 150 Crosser foi lançada em 2014 em duas versões (E e ED) cuja diferença era apenas o disco de freio na roda dianteira. A moto utilizava a mesma mecânica da Fazer 150 e se mostrou muito competitiva para o uso diário pelo conforto oferecido pelas suspensões de maior curso e pneus mais largos para enfrentar os buracos das cidades.',
      imagem: 'https://www.motonline.com.br/storage/guides/yamaha/xtz-150-crosser.jpg'
    }

  ]

  constructor() { }

  getMotos(){
    return this.motos;
  }

  getById(id: number){
    return this.motos.find(moto => moto.id === id);
  }

}
