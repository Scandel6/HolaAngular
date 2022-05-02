export interface Motor {
    potencia: number;
    par: number;

    encender(): void;
    apagar(): void;
    checkear(): string;
}