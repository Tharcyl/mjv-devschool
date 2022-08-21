import { Injectable } from '@angular/core';
import { Moto } from 'src/app/shared/models/moto.model';

@Injectable({
  providedIn: 'root'
})
export class MotosService {

  motos: Array<Moto> = [
    {
      id: 1,
      nome: 'NRX Bros',
      cilindrada: 160,
      fabricante: 'Honda',
      precoSugerido: 17000,
      descricao: 'A Honda apresentou a Bros 160 em substituição a Bros 150, que deixava de ser fabricada na época. O modelo tinha novo motor de um cilindro, equipado com partida elétrica, injeção eletrônica de combustível, comando de válvulas roletado e refrigeração a ar. Isso sem falar da novidade, a tecnologia flex, que possibilitava rodar com etanol/gasolina ou a mistura dos combustíveis em qualquer proporção. Mais tarde a linha ganhou mais novidades, como a introdução do sistema de frenagem combinada CBS (Combined Break System).',
      imagem: 'https://www.motonline.com.br/storage/guides/honda/nxr-bros-160.jpg',
    },
    {
      id: 2,
      nome: 'XTZ Crosser',
      cilindrada: 150,
      fabricante: 'Yamaha',
      precoSugerido: 17800,
      descricao: 'A XTZ 150 Crosser foi lançada em 2014 em duas versões (E e ED) cuja diferença era apenas o disco de freio na roda dianteira. A moto utilizava a mesma mecânica da Fazer 150 e se mostrou muito competitiva para o uso diário pelo conforto oferecido pelas suspensões de maior curso e pneus mais largos para enfrentar os buracos das cidades.',
      imagem: 'https://www.motonline.com.br/storage/guides/yamaha/xtz-150-crosser.jpg'
    },
    {
      id: 3,
      nome: 'Lorem Ipsum',
      cilindrada: 150,
      fabricante: 'Lorem Ipsum',
      precoSugerido: 17800,
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.",
      imagem: 'https://image.webmotors.com.br/_fotos/AnuncioMotoUsados/gigante/2022/202208/20220802/honda-xre-300-WMIMAGEM22344280682.jpg'
    },
	{
      id: 4,
      nome: 'Lorem Ipsum',
      cilindrada: 150,
      fabricante: 'Lorem Ipsum',
      precoSugerido: 17800,
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.",
      imagem: 'https://media.motociclismoonline.com.br/uploads/2021/08/45%C2%B0-MASTER-RIDE-PRETA.png'
    },
	{
      id: 5,
      nome: 'Lorem Ipsum',
      cilindrada: 150,
      fabricante: 'Lorem Ipsum',
      precoSugerido: 17800,
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.",
      imagem: 'https://content2.kawasaki.com/ContentStorage/KMB/ProductTopFeature/1030/be94269c-712c-42e8-9156-0ecfbea8fff5.jpg?w=800'
    },
	{
      id: 6,
      nome: 'Lorem Ipsum',
      cilindrada: 150,
      fabricante: 'Lorem Ipsum',
      precoSugerido: 17800,
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.",
      imagem: 'https://http2.mlstatic.com/D_NQ_NP_727684-MLB47044371158_082021-O.jpg'
    },
	{
      id: 7,
      nome: 'Lorem Ipsum',
      cilindrada: 150,
      fabricante: 'Lorem Ipsum',
      precoSugerido: 17800,
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.",
      imagem: 'https://i0.statig.com.br/bancodeimagens/bq/z8/at/bqz8atkotf594jcoyx9b0p0y2.jpg'
    },
	{
      id: 8,
      nome: 'Lorem Ipsum',
      cilindrada: 150,
      fabricante: 'Lorem Ipsum',
      precoSugerido: 17800,
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.",
      imagem: 'https://www.bestriders.com.br/wp-content/uploads/2013/08/bmw-F-800GS.jpg'
    },

  ]

  constructor() { }

  getMotos(){
    return this.motos;
  }

  getById(id: number){
    return this.motos.find(moto => moto.id === id);
  }

}
