import {TipoIdioma} from '../TipoIdioma/TipoIdioma';
import { Cliente } from '../Cliente/Cliente';

export class SubId {

    codigoId : string;
    codigoSubId : string;
    periodo : Date;
    idioma : TipoIdioma;
    conDetalle : Boolean;
    primerEnvio : Date;
    ultimoEnvio : Date;
    fechasEnvios : Date[];
    linkRespuesta : string;
    alias : string;
    casillaMailPrincipal : string;
    casillasMailCC : string[];
    cliente : Cliente;

    constructor(
        codigoId : string,
        codigoSubId : string,
        periodo : Date,
        idioma : TipoIdioma,
        conDetalle : Boolean,
        linkRespuesta : string,
        casillaMailPrincipal : string,
        casillasMailCC : string[],
        cliente : Cliente
    ) {
        this.codigoId = codigoId;
        this.codigoSubId = codigoSubId;
        this.periodo = periodo;
        this.idioma = idioma;
        this.conDetalle = conDetalle;
        this.linkRespuesta = linkRespuesta;
        this.casillaMailPrincipal = casillaMailPrincipal;
        this.casillasMailCC = casillasMailCC;
        this.cliente = cliente;
    }

    //Set alias
    private crearAlias() {
        //Chequear cuanto es el largo máximo del alias para cortar el getNombre()
        this.alias = 
            this.cliente.getNombre() + '-' +
            this.periodo.getMonth() + '-' + 
            this.periodo.getFullYear() + '-' +
            this.cliente.getCodigo();
    }

    public setCasillaMailPrincipal(nuevoMail : string) {
        this.casillaMailPrincipal = nuevoMail;
    }

    public addCasillasMailCC(nuevoMail : string) {
        //this.casillasMailCC.add(nuevoMail)
    }

    public removeCasillasMailCC(mailEliminar : string) {
        //this.casillasMailCC.remove(mailEliminar);
    }

}