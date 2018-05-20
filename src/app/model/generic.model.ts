export class Generic{
    codigo: number;
    libro: string;
    anio: number;
    publicador: string;

    constructor(codigo?:number, libro?:string, anio?:number, publicador?:string){
        this.codigo = codigo;
        this.libro = libro;
        this.anio = anio;
        this.publicador = publicador;
    }
}