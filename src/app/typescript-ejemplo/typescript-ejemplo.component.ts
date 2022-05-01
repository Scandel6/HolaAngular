import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript-ejemplo',
  templateUrl: './typescript-ejemplo.component.html',
  styleUrls: ['./typescript-ejemplo.component.scss']
})
export class TypescriptEjemploComponent implements OnInit {

  private numero: number = 10; //int, double
  public cadena: string = '';
  protected esValido: boolean = true;
  fecha: Date = new Date();

  numerosPremiados: number[] = []; //arrays
  responsablesZona: string[] = [];

  //En funciones asíncronas se utilizan las promesas

  otroNumero?: number; //Este campo puede ser number o undefined, en cuyo caso debemos comprobar si tiene valor o no

  cosaRara: number | string | undefined; //Ojocuidao

  cualquier: any; //OOOJOCUIDAO


  constructor() { }

  ngOnInit(): void {
    if(this.otroNumero){
      console.log("Tiene valor: "+ +this.otroNumero)
    }else{
      console.log("No tiene valor");
    }
  }

  private calcular():number {
    const numero1: number = 10; //Más recomendable usar const para estar más seguros
    let numero2: number = 10;
    numero2 = 20;

    return 0;
  }

}
