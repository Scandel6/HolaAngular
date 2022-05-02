import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TIPODESCUENTO } from '../shared/TIPODESCUENTO.enum';

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
    this.probarArrays();
    this.enumerados(TIPODESCUENTO.ESPECIAL);
  }

  
  // TIPOS

  private calcular():number {
    const numero1: number = 10; //Más recomendable usar const para estar más seguros
    let numero2: number = 10;
    numero2 = 20;

    return 0;
  }


  //ARRAYS

  private probarArrays() {
    const array: string[] = ['Pera', 'Manzana', 'Melón', 'Sandía', 'Naranja'];

    console.log(array.length);

    array.unshift('Cereza'); // Añade al inicio

    console.log(array);


    array.pop(); // Quita el del final

    console.log(array);

    const posicion: number = array.indexOf('Manzana');

    if(posicion>-1){
      array.splice(posicion, 1); // Eliminar un elemento concreto del array
    }

    console.log(array);

    array.sort();

    const array02:string [] = ['Fresa', 'Platano'];

    const resultado: string [] = array.concat(array02);

    console.log(resultado);

  }

  //MÉTODOS
  
  // Un método puede ser public, private o protected
  // Si el tipo de método está vacío, por defecto es void. Pero aún así se pueden retornar
  // valores distintos.

  // Es recomendable dejar de forma explícita la visibilidad del método y su tipo. Y camel-case
  public calcularDescuento(codigoCliente: number, tipoTarifa: number): number{
    return 0;
  }

  private comprobarValidez(x: number, y: number): void {
    throw new Error('No es válido');
  }


  // TIPO ENUMERADOS
  private enumerados(tipo: TIPODESCUENTO): void{
    if (tipo === TIPODESCUENTO.ESPECIAL) {
      //Do something
      console.log(tipo);
    }
  }

}
