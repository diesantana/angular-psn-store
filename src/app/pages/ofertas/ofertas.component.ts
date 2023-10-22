import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  constructor(private serviceTitle: Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('Ofertas | PlayStation Store')
  }

}
