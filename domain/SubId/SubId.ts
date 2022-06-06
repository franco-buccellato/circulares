import {TipoIdioma} from '../TipoIdioma/TipoIdioma';
import { Cliente } from '../Cliente/Cliente';

export class SubId {

    codigoId : String;
    codigoSubId : String;
    periodo : Date;
    idioma : TipoIdioma;
    conDetalle : Boolean;
    primerEnvio : Date;
    ultimoEnvio : Date;
    fechasEnvios : [Date];
    linkRespuesta : String;
    alias : String;
    casillaMailPrincipal : String;
    casillasMailCC : [String];
    cliente : Cliente;

    constructor(
        codigoId : String,
        codigoSubId : String
    ) {
        this.codigoId = codigoId;
        this.codigoSubId = codigoSubId;
    }

}