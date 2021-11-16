(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var UsuarioSchema = new Schema({
        documento: {type: String,required: true},
        nombres: {type: String,required: true},
        apellidos: {type: String,required: true},
        correo: String,
        telefono: String,
        direccion: String,
        rol: {type: String,required: true},
        estado: {type: String,required: true}
    });

    module.exports = mongoose.model('usuarios', UsuarioSchema);
})();