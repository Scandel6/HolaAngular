import { TIPOCOCHE } from "../shared/TIPOCOCHE.enum";
import { Vehiculo } from "./vehiculo.model";
export class Coche extends Vehiculo {

    private tipo: TIPOCOCHE;

    public getTipo() {
        return this.tipo;
    }

    public setTipo(tipo: TIPOCOCHE): void {
        this.tipo = tipo;
    }


    constructor(
        id: number,
        marca: string,
        modelo: string,
        tipo: TIPOCOCHE,
        descripcion?: string,
        imagen?: string
    ) {

        super(id, marca, modelo, descripcion, imagen);
        this.tipo = tipo
    }

}