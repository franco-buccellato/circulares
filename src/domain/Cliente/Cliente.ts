export class Cliente {

    codigoCliente : string;
    nombre : string;
    
    constructor(
        codigoCliente : string,
        nombre : string
    ) {
        this.codigoCliente = codigoCliente;
        this.nombre = nombre;
    }

    public getCodigo() : string {
        return this.codigoCliente;
    }
    public getNombre() : string {
        return this.nombre;
    }

}