import { Usuario } from '../Usuario/Usuario';
import { EstadoId }  from '../EstadoId/EstadoId';
import { Permiso } from '../Permiso/Permiso';
const idCarpetaRepositorioIds = '';

export class Id{
    codigoId : string;
    dueDate : Date;
    linkResultados: string;
    estado : EstadoId;
    responsables: [Usuario];
    observadores: [Usuario];

    constructor(
        codigoId : string,
        dueDate : Date,
        linkResultado : string
    ) {
        this.codigoId = codigoId;
        this.dueDate = dueDate;
        this.linkResultados = linkResultado;
        this.estado = EstadoId.ASIGNADO;
        //Usuarios mock
        this.responsables = [new Usuario('Usuario de Prueba Administrador', 'confirmaciones.atc@pwc.com', Permiso.ADMINISTRADOR)];
        this.observadores = [new Usuario('Usuario de Prueba Observador', 'confirmaciones.atc@pwc.com', Permiso.OBSERVADOR)];

        let objetoJSON = JSON.stringify(this);
        DriveApp.getFolderById(idCarpetaRepositorioIds).createFile(this.codigoId, objetoJSON);
    }

    //Este método no corresponde a esta clase
    //Debería existir un gestor de de Id el cual se encarga de interactuar con Drive,
    //inicializar el objeto Id con el código que necesito y devolverlo
    //queda asi para fines prácticos de prueba
    //Recibe un codigoId, busca el archivo en la carpeta de Id's, lo parsea a Objeto y devuelve el objeto Id.
    public getId(codigoId : string) : Id {
        return JSON.parse(DriveApp.getFolderById(idCarpetaRepositorioIds).getFilesByName(codigoId)[0]);
    }
}