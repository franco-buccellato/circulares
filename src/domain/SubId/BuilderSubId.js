// Compiled using undefined undefined (TypeScript 4.7.3)
var exports = exports || {};
var module = module || { exports: exports };
exports.BuilderSubId = void 0;
//import { SubId } from "./subId";
//import {TipoIdioma} from '../TipoIdioma/TipoIdioma';
//import { Cliente } from '../Cliente/Cliente';
var BuilderSubId = /** @class */ (function () {
    function BuilderSubId() {
    }
    /* constructor(filaSpreedSheet : string[]) {
        this.inputDatos = filaSpreedSheet;
    } */
    BuilderSubId.prototype.lecturaSpreedSheet = function (filaSpreedSheet) {
        if (filaSpreedSheet.length <= 7) {
            throw new Error("Cantidad incorrecta de datos a ingresar.");
        }
        else {
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
    };
    BuilderSubId.prototype.verificarCodigo = function (codigo) {
        if (codigo.length != 9) {
            throw new Error("Código de Sub-Id inválido.");
        }
        else {
            this.codigoSubId = codigo;
        }
    };
    BuilderSubId.prototype.existeTipoCliente = function (tipoCliente, nombreCliente) {
        if (!tipoCliente.includes(tipoCliente.toLocaleUpperCase())) {
            throw new Error("No existe este Tipo de Cliente.");
        }
        else {
            //Pedir al repositorio del cliente que nos devuelva el cliente a partir del nombre y el tipo
            //Si este no existe entonces lo crea
            //this.cliente = new RepositorioClienter(tipoCliente, nombreCliente);
        }
    };
    BuilderSubId.prototype.chequearMailPrincipal = function (mail) {
        //Aca se puede hacer el check mail
        if (!mail.includes('@')) {
            throw new Error("Mail invalido.");
        }
        else {
            this.casillaMailPrincipal = mail;
        }
    };
    BuilderSubId.prototype.chequearMailCC = function (mail) {
        //Aca se puede hacer el check mail
        if (!mail.includes('@')) {
            throw new Error("Mail invalido.");
        }
        else {
            //this.casillasMailCC.add(mail);
        }
    };
    BuilderSubId.prototype.verificarPeriodo = function (periodo) {
    };
    BuilderSubId.prototype.construir = function () {
    };
    return BuilderSubId;
}());
exports.BuilderSubId = BuilderSubId;
