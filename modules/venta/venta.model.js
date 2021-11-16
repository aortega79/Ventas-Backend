(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var VentaSchema = new Schema({
        idVenta: {type: Number,required: true},
        fechaVenta: String,
        idProducto: {type: String,required: true},
        cantidadProducto: {type: Number,required: true},
        precioUnitario: {type: Number,required: true},
        valorTotal: {type: Number,required: true},
        documentoCliente: {type: String,required: true},
        nombreCliente: {type: String,required: true},
        idVendedor: {type: String,required: true}
    });

    module.exports = mongoose.model('ventas', VentaSchema);
})();