import repositorioBancos from './clientes-bancos.json';

export class GestorRepositorioClientes {
    private static instance : GestorRepositorioClientes;
    repositorioBancos : JSON;

    private constructor() {}

    public static getInstance(): GestorRepositorioClientes {
        if (!GestorRepositorioClientes.instance) {
            GestorRepositorioClientes.instance = new GestorRepositorioClientes();
        }
        return GestorRepositorioClientes.instance;
    }

    public getBancos() {

    }

}