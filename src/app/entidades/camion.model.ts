import { TIPOCAMION } from "../shared/TIPOCAMION.enum";
import { Vehiculo } from "./vehiculo.model";

export class Camion extends Vehiculo {

    private tipo: TIPOCAMION;


    public getTipo(): TIPOCAMION {
        return this.tipo;
    }

    public setTipo(tipo: TIPOCAMION): void {
        this.tipo = tipo;
    }

    constructor(
        id: number,
        marca: string,
        modelo: string,
        tipo: TIPOCAMION,
        descripcion?: string,
        imagen?: string
        ) {
            
        super(id, marca, modelo, descripcion, imagen);
        this.tipo = tipo
    }


}