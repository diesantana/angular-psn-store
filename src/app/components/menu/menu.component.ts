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

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    // Obtém uma referência ao elemento do menu com a classe CSS navbar-store usando o ElementRef.
    this.menuElement = this.el.nativeElement.querySelector('.navbar-store');

    // Calcula a posição original do menu em relação ao topo da página, levando em consideração a rolagem atual da página.
    this.originalTopPosition = this.menuElement.getBoundingClientRect().top + window.scrollY;

    // Adiciona um ouvinte de evento de rolagem à janela (página) e chama a função checkMenuPosition sempre que a página é rolada.
    window.addEventListener('scroll', this.checkMenuPosition.bind(this));
  }

  toggleMenu() {
    // Função para alternar o estado do menu 
    this.menuAtivo = !this.menuAtivo;
  }

  private checkMenuPosition(): void {
    // Função para verificar a posição do menu durante a rolagem da página

    // Obtém a posição atual de rolagem da página, levando em consideração a compatibilidade com diferentes navegadores.
    const scrollY = window.scrollY;

    // Define um limiar (threshold) com base na posição original do menu. Ajustando ela você determina quando o menu deve ser fixado.
    const threshold = this.originalTopPosition;

    const placeholderElement: any = document.querySelector('.fixed-menu-placeholder');

    if (scrollY >= threshold) { // Verifica se a posição atual de rolagem atingiu ou ultrapassou o limiar.
      
      // Se o scroll atingir ou ultrapassar o limiar, aplique a classe CSS para fixar o menu no topo
      this.menuElement.classList.add('fixed-menu');
      placeholderElement.style.display = 'block';
    } else {
      // Caso contrário, remova a classe CSS para restaurar a posição original do menu
      this.menuElement.classList.remove('fixed-menu');
      placeholderElement.style.display = 'none';
    }
  }
}
