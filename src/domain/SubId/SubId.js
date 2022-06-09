// Compiled using undefined undefined (TypeScript 4.7.3)
var exports = exports || {};
var module = module || { exports: exports };
exports.SubId = void 0;
//import {TipoIdioma} from '../TipoIdioma/TipoIdioma';
//import { Cliente } from '../Cliente/Cliente';
var SubId = /** @class */ (function () {
    function SubId(codigoId, codigoSubId, periodo, idioma, conDetalle, linkRespuesta, casillaMailPrincipal, casillasMailCC, cliente) {
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
    SubId.prototype.crearAlias = function () {
        //Chequear cuanto es el largo máximo del alias para cortar el getNombre()
        this.alias =
            this.cliente.getNombre() + '-' +
                this.periodo.getMonth() + '-' +
                this.periodo.getFullYear() + '-' +
                this.cliente.getCodigo();
    };
    SubId.prototype.setCasillaMailPrincipal = function (nuevoMail) {
        this.casillaMailPrincipal = nuevoMail;
    };
    SubId.prototype.addCasillasMailCC = function (nuevoMail) {
        //this.casillasMailCC.add(nuevoMail)
    };
    SubId.prototype.removeCasillasMailCC = function (mailEliminar) {
        //this.casillasMailCC.remove(mailEliminar);
    };
    return SubId;
}());
exports.SubId = SubId;
