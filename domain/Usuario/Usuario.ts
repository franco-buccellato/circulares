import {Permiso} from '../Permiso/Permiso';

export class Usuario {
    nombre: string;
    mail: string;
    permiso : Permiso;

    constructor(
        nombre : string,
        mail : string,
        permiso : Permiso
    ) {
        this.nombre = nombre;
        this.mail = mail;
        this.permiso = permiso;
    }

}