import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //Para navegar entre componentes

@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.scss']
})
export class ArticuloListComponent implements OnInit {

  constructor(
    private rotuer:Router
  ) { 
  }

  ngOnInit(): void {
  }

  public navegarAFicha(idArticulo: number):void {
    //Navegamos al componente de path articulo-ficha pasándole el idArticulo a articulo-form
    this.rotuer.navigate(['articulo-ficha', idArticulo]);
  }

}
