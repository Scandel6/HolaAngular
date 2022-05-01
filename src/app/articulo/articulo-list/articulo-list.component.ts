import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; //Para navegar entre componentes

@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.scss']
})
export class ArticuloListComponent implements OnInit {

  modo?: string;//? porque no sabemos si nos va a llegar

  constructor(
    //Inyectamos router y route
    private rotuer: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    //Para cambiar de "string | null" a "string | undefined"
    this.modo = (this.route.snapshot.queryParamMap.get("modo")) ?? undefined;
  }

  public navegarAFicha(idArticulo: number): void {
    //Navegamos al componente de path articulo-ficha pasándole el idArticulo a articulo-form
    this.rotuer.navigate(['articulo-ficha', idArticulo]);
  }

}
