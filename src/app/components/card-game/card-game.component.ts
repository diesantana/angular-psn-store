import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/shared/models/games.model';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent implements OnInit {
  @Input() gameData!: Game;

  imgCapa: string = '../../../assets/the-crew-cross-gen.jpg';
  imgAltCapa: string = 'Capa do game The Crew Motorfest';
  consoleList: string[] = ['PS5', 'PS4'];
  produtoType: string = 'Pacote do jogo';
  titleGame: string = 'The Crew&trade; Motorfest - Pacote Cross-Gen';
  typeBloco: string = 'Deluxe';
  porcentagemPreco: string = '-20%';
  precoAtual: string = 'R$263,92';
  precoAnterior: string = 'R$329,90';

  constructor() { }

  ngOnInit(): void {
  }

}
