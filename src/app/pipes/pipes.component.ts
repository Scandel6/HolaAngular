import { Component, OnInit } from '@angular/core';

//Para importar el local de España en este caso
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';

registerLocaleData(localeES);

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  cadena: string = "texto QUE quEREmos traNSFormar";
  numero: number = 1200.753;
  fecha: Date = new Date();
  nombre: string = "GARCÍA LÓPEZ, ANTONIO"; // Quremos verlo como ANTONIO GARCÍA LÓPEZ

  constructor() { }

  ngOnInit(): void {
  }

}
