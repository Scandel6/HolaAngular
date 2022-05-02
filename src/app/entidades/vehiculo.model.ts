export abstract class Vehiculo {
    /* Esto podría ser un ejemplo básico y no muy correcto*/
    private id: number;
    private marca: string;
    private modelo: string;
    private descripcion?: string;
    private imagen?: string;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setString(marca: string): void {
        this.marca = marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getDescripcion(): string | undefined{
        return this.descripcion;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    public getImagen(): string | undefined{
        return this.imagen;
    }

    public setImagen(imagen: string) {
        this.imagen = imagen;
    }

    // Primero van los parámetros obligatorios, y luego los opcionales
    
    constructor(
        id: number,
        marca: string,
        modelo: string,
        descripcion?: string,
        imagen?: string
    ) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}