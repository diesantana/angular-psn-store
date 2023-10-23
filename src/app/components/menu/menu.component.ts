import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuAtivo: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.menuAtivo = !this.menuAtivo;
  }

}
