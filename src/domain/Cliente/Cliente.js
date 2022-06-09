// Compiled using undefined undefined (TypeScript 4.7.3)
var exports = exports || {};
var module = module || { exports: exports };
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(codigoCliente, nombre) {
        this.codigoCliente = codigoCliente;
        this.nombre = nombre;
    }
    Cliente.prototype.getCodigo = function () {
        return this.codigoCliente;
    };
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
