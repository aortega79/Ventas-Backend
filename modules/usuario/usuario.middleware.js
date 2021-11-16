(function () {
    'use strict';

    module.exports = {
        addUsuario: addUsuario,
        getUsuarios: getUsuarios,
        getUsuarioById: getUsuarioById,
        modifyUsuario: modifyUsuario,
        removeUsuario: removeUsuario
    };

    var UsuarioService = require('./usuario.module')().UsuarioService;

    function addUsuario(req, res, next) {

        UsuarioService.createUsuario(req.body)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(error) {
            next(error);
        }

    }

    function getUsuarios(req, res, next) {

        UsuarioService.fetchUsuarios()
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function getUsuarioById(req, res, next) {

        UsuarioService.fetchUsuarioById(req.params.usuarioId)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function modifyUsuario(req, res, next) {
        UsuarioService.updateUsuario(req.params.usuarioId, req.body)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }
    }

    function removeUsuario(req, res, next) {

        UsuarioService.deleteUsuario(req.params.usuarioId)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }

    }

})();
