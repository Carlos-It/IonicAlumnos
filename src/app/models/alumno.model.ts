export enum Sexo { Hombre, Mujer };
export class AlumnoModel {

    private _nombre: string;
    private _apellidos: string;
    private _F_Nac: Date;
    private _sexo: Sexo;
    private _email: string;
    private _telefono: number;
    private _foto: string;


    constructor() { }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get F_Nac(): Date {
        return this._F_Nac;
    }
    public set F_Nac(value: Date) {
        this._F_Nac = value;
    }

    public get apellidos(): string {
        return this._apellidos;
    }
    public set apellidos(value: string) {
        this._apellidos = value;
    }

    public get sexo(): Sexo {
        return this._sexo;
    }
    public set sexo(value: Sexo) {
        this._sexo = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    public get telefono(): number {
        return this._telefono;
    }
    public set telefono(value: number) {
        this._telefono = value;
    }
    public get foto(): string {
        return this._foto;
    }
    public set foto(value: string) {
        this._foto = value;
    }
    // public get F_Nac = () => `${this._F_Nac.getDay} / ${this._F_Nac.getMonth} / ${this._F_Nac.getFullYear} `
}
