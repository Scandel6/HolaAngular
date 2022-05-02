import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Articulo } from '../articulo.model';

@Component({
  selector: 'app-articulo-card',
  templateUrl: './articulo-card.component.html',
  styleUrls: ['./articulo-card.component.scss']
})
export class ArticuloCardComponent implements OnInit {
  @Input() articulo?: Articulo; // Se le pasa a través de articulo-list.component.html, quien lo recive por su TypeScript
  @Input() textoBoton: string = "Pulsar";
  @Output() click: EventEmitter<number> = new EventEmitter<number>(); //Enviamos un click como evento para que sea el padre de esta clase quien gestione lo que esta va a mostrar

  constructor() {  }

  ngOnInit(): void {
  }

  // Hacemos que cuando pulsemos el botón mandamos un mensaje con el identificador id de artículo
  public pulsarBoton(): void{
    this.click.emit(this.articulo?.getId());
  }
}
