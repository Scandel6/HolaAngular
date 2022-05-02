import { Motor } from "./motor.interface";

export class MotorElectrico implements Motor {

    public potencia: number;
    public par: number;

    public getPotencia():number{
        return this.potencia;
    }

    public setPotencia(potencia: number): void {
        this.potencia = potencia;
    }

    public getPar():number{
        return this.par;
    }

    public setPar(par: number): void{
        this.par = par;
    }


  constructor(potencia: number, par: number) {
    this.potencia = potencia
    this.par = par
  }

    encender(): void {
        throw new Error("Method not implemented.");
    }

    apagar(): void {
        throw new Error("Method not implemented.");
    }

    checkear(): string {
        throw new Error("Method not implemented.");
    }

}