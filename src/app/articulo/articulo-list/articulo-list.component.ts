import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; //Para navegar entre componentes
import { Articulo } from '../articulo.model';
import { ArticuloService } from '../articulo.service';

@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.scss']
})
export class ArticuloListComponent implements OnInit {

  articulos: Articulo[] = [];
  modo?: string;//Usamos ? porque no sabemos si nos va a llegar

  constructor(
    //Inyectamos router y route
    private rotuer: Router,
    private route: ActivatedRoute,
    private articuloService: ArticuloService // Ahora podemos inyectar como servicio

  ) {
  }

  ngOnInit(): void {
    this.obtenerParametros();
    this.articulos = this.articuloService.obtenerArticulos();
  }

  public navegarAFicha(idArticulo: number): void {
    //Navegamos al componente de path articulo-ficha pasándole el idArticulo a articulo-form
    this.rotuer.navigate(['articulo-ficha', idArticulo]);
  }

  private obtenerParametros(): void {
    //Para cambiar de "string | null" a "string | undefined"
    this.modo = (this.route.snapshot.queryParamMap.get("modo")) ?? undefined;
  }

}
