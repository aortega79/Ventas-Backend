(function () {
    'use strict';

    module.exports = {
        addVenta: addVenta,
        getVentas: getVentas,
        getVentaById: getVentaById,
        modifyVenta: modifyVenta,
        removeVenta: removeVenta
    };

    var VentaService = require('./venta.module')().VentaService;

    function addVenta(req, res, next) {

        VentaService.createVenta(req.body)
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

    function getVentas(req, res, next) {

        VentaService.fetchVentas()
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

    function getVentaById(req, res, next) {

        VentaService.fetchVentaById(req.params.ventaId)
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

    function modifyVenta(req, res, next) {
        VentaService.updateVenta(req.params.ventaId, req.body)
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

    function removeVenta(req, res, next) {

        VentaService.deleteVenta(req.params.ventaId)
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
