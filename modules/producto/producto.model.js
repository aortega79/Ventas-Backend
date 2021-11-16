(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var ProductoSchema = new Schema({
        idProducto: {type: String,required: true},
        descripcion: {type: String,required: true},
        valorUnitario: {type: String,required: true},
        estado: String
    });

    module.exports = mongoose.model('productos', ProductoSchema);
})();