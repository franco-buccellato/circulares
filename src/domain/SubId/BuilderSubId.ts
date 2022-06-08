import { SubId } from "./subId";
import {TipoIdioma} from '../TipoIdioma/TipoIdioma';
import { Cliente } from '../Cliente/Cliente';

export class BuilderSubId {
    subId : SubId;
    codigoId : string;
    codigoSubId : string;
    periodo : Date;
    idioma : TipoIdioma;
    conDetalle : Boolean;
    linkRespuesta : string;
    casillaMailPrincipal : string;
    casillasMailCC : string[];
    cliente : Cliente;

    /* constructor(filaSpreedSheet : string[]) {
        this.inputDatos = filaSpreedSheet;
    } */

    public lecturaSpreedSheet(filaSpreedSheet : string) {
        if(filaSpreedSheet.length <= 7) {
            throw new Error("Cantidad incorrecta de datos a ingresar.");
        } else {
            this.verificarCodigo(filaSpreedSheet[0]);
            //filaSpreedSheet[1] es el nombreCliente
            //filaSpreedSheet[2] nombre destinatario
            this.existeTipoCliente(filaSpreedSheet[3], filaSpreedSheet[2]);
            this.chequearMailPrincipal(filaSpreedSheet[4]);
            //Chequeo de mails CC
            filaSpreedSheet[5] != '' && this.chequearMailCC(filaSpreedSheet[5]);
            filaSpreedSheet[6] != '' && this.chequearMailCC(filaSpreedSheet[6]);
            filaSpreedSheet[7] != '' && this.chequearMailCC(filaSpreedSheet[7]);
            this.verificarPeriodo(filaSpreedSheet[8]);
            this.construir();
        }
    }

    private verificarCodigo(codigo : string) {
        if(codigo.length != 9) {
            throw new Error("Código de Sub-Id inválido.");
        } else {
            this.codigoSubId = codigo;
        }
    }

    private existeTipoCliente(tipoCliente : string, nombreCliente : string) {
        if(!tipoCliente.includes(tipoCliente.toLocaleUpperCase())) {
            throw new Error("No existe este Tipo de Cliente.");
        } else {
            //Pedir al repositorio del cliente que nos devuelva el cliente a partir del nombre y el tipo
            //Si este no existe entonces lo crea
            //this.cliente = new RepositorioClienter(tipoCliente, nombreCliente);
        }
    }

    private chequearMailPrincipal(mail : string) {
        //Aca se puede hacer el check mail
        if(!mail.includes('@')) {
            throw new Error("Mail invalido.");
        } else {
            this.casillaMailPrincipal = mail;
        }
    }

    private chequearMailCC(mail : string) {
        //Aca se puede hacer el check mail
        if(!mail.includes('@')) {
            throw new Error("Mail invalido.");
        } else {
            //this.casillasMailCC.add(mail);
        }
    }

    private verificarPeriodo(periodo : string) {

    }

    private construir() {
        
    }

}