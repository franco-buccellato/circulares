// Compiled using undefined undefined (TypeScript 4.7.3)
var exports = exports || {};
var module = module || { exports: exports };
exports.GestorRepositorioClientes = void 0;
//import repositorioBancos from './clientes-bancos.json';
var GestorRepositorioClientes = /** @class */ (function () {
    function GestorRepositorioClientes() {
    }
    GestorRepositorioClientes.getInstance = function () {
        if (!GestorRepositorioClientes.instance) {
            GestorRepositorioClientes.instance = new GestorRepositorioClientes();
        }
        return GestorRepositorioClientes.instance;
    };
    GestorRepositorioClientes.prototype.getBancos = function () {
    };
    return GestorRepositorioClientes;
}());
exports.GestorRepositorioClientes = GestorRepositorioClientes;
