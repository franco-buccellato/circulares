// Compiled using undefined undefined (TypeScript 4.7.3)
var exports = exports || {};
var module = module || { exports: exports };
exports.Id = void 0;
//import { Usuario } from '../Usuario/Usuario';
//import { EstadoId }  from '../EstadoId/EstadoId';
//import { Permiso } from '../Permiso/Permiso';
var idCarpetaRepositorioIds = '1QRKFYERBcNizYBbcJ_b2Oz6YSvxqBT9o';
var Id = /** @class */ (function () {
    function Id(codigoId, dueDate, linkResultado) {
        this.codigoId = codigoId;
        this.dueDate = dueDate;
        this.linkResultados = linkResultado;
        this.estado = EstadoId.ASIGNADO;
        //Usuarios mock
        this.responsables = [new Usuario('Usuario de Prueba Administrador', 'confirmaciones.atc@pwc.com', Permiso.ADMINISTRADOR)];
        this.observadores = [new Usuario('Usuario de Prueba Observador', 'confirmaciones.atc@pwc.com', Permiso.OBSERVADOR)];
        var objetoJSON = JSON.stringify(this);
        DriveApp.getFolderById(idCarpetaRepositorioIds).createFile(this.codigoId, objetoJSON);
    }
    //Este método no corresponde a esta clase
    //Debería existir un gestor de de Id el cual se encarga de interactuar con Drive,
    //inicializar el objeto Id con el código que necesito y devolverlo
    //queda asi para fines prácticos de prueba
    //Recibe un codigoId, busca el archivo en la carpeta de Id's, lo parsea a Objeto y devuelve el objeto Id.
    Id.prototype.getId = function (codigoId) {
        return JSON.parse(DriveApp.getFolderById(idCarpetaRepositorioIds).getFilesByName(codigoId)[0]);
    };
    return Id;
}());
exports.Id = Id;
