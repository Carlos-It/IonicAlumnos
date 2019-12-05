export class Fecha {

    private _dia: number;
    private _mes: number;
    private _anio: number;
/*
     constructor(dia: number, mes: number, anio: number) {
         this._dia = dia;
         this._mes = mes;
         this._anio = anio;
     }

     constructor(fecha:number[]) {
        this._dia=fecha[0];
        this._mes=fecha[1];
        this._anio=fecha[2];
     }

*/
    constructor(fecha:number[]) {
        this._dia=fecha[0];
        this._mes=fecha[1];
        this._anio=fecha[2];
     }

    public get dia(): number {
        return this._dia;
    }
    public set dia(value: number) {
        if (value > 0 && value < 32) {
            this._dia = value;
        }
    }

    public get mes() {
        return this._mes;
    }

    public set mes(value: number) {
        if (value > 0 && value < 13) {
            this._mes = value;
        }
    }

    public get anio(): number {
        return this._anio;
    }

    public set anio(value: number) {
        if (value > 0) {
            this._anio = value;
        }
    }
}
