import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from '../articulo.model';

@Component({
  selector: 'app-articulo-card',
  templateUrl: './articulo-card.component.html',
  styleUrls: ['./articulo-card.component.scss']
})
export class ArticuloCardComponent implements OnInit {
  @Input() articulo?: Articulo; // Se le pasa a través de articulo-list.component.html, quien lo recive por su TypeScript

  constructor() {  }

  ngOnInit(): void {
  }

}
