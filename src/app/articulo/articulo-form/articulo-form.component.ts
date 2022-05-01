import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';//Para ver si la ruta que lo conecta se ha activado

@Component({
  selector: 'app-articulo-form',
  templateUrl: './articulo-form.component.html',
  styleUrls: ['./articulo-form.component.scss']
})
export class ArticuloFormComponent implements OnInit {

  //? hace que sea opcional porque no sabemos si nos lo va a enviar
  idArticulo?: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //Lo que le pedimos tiene que tener el mismo nombre que lo que le pasamos por app-routing.module.ts
    //?? hace que si no tiene valor le asigna undefined
    this.idArticulo = this.route.snapshot.paramMap.get('idArticulo') ?? undefined;
  }

}
