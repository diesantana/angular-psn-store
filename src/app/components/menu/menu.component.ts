import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menuAtivo: boolean = false; // Variável para controlar o estado do menu
  private menuElement!: HTMLElement; // Referência ao elemento HTML do menu
  private originalTopPosition!: number; // Posição original do menu em relação ao topo da página

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    // Obter a referência ao elemento do menu
    this.menuElement = this.el.nativeElement.querySelector('.navbar-store');

    // Obter a posição original do menu em relação ao topo da página
    this.originalTopPosition = this.menuElement.getBoundingClientRect().top + window.scrollY;

    // Adicionar um ouvinte de evento de rolagem para verificar a posição do menu
    window.addEventListener('scroll', this.checkMenuPosition.bind(this));
  }

  toggleMenu() {
    // Função para alternar o estado do menu 
    this.menuAtivo = !this.menuAtivo;
  }

  private checkMenuPosition(): void {
    // Função para verificar a posição do menu durante a rolagem da página

    const scrollY = window.scrollY || window.pageYOffset;
    const threshold = this.originalTopPosition; // Ajuste conforme necessário

    if (scrollY >= threshold) {
      // Se o scroll atingir ou ultrapassar o limiar, aplique a classe CSS para fixar o menu no topo
      this.menuElement.classList.add('fixed-menu');
    } else {
      // Caso contrário, remova a classe CSS para restaurar a posição original do menu
      this.menuElement.classList.remove('fixed-menu');
    }
  }
}
