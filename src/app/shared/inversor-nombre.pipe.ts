import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inversorNombre'
})
export class InversorNombrePipe implements PipeTransform {

  transform(nombreAInvertir:string): string {
    
    const partesNombre: string[] = nombreAInvertir.split(",");

    if(partesNombre.length == 2){
      //Este código no es limpio, solo para mostrar
      return (partesNombre[1]+ ' ' + partesNombre[0]);
    }else{
      return nombreAInvertir;
    }

  }

}
