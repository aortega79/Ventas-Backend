var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var MongoDBUtil = require('./modules/mongodb/modules/mongodb/mongodb.module').MongoDBUtil;
var UsuarioController = require('./modules/usuario/usuario.module')().UsuarioController;
var ProductoController = require('./modules/producto/producto.module')().ProductoController;
var VentaController = require('./modules/venta/venta.module')().VentaController;
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
MongoDBUtil.init();
app.use(cors());
app.use('/usuarios', UsuarioController);
app.use('/productos', ProductoController);
app.use('/ventas', VentaController);

app.get('/', function (req, res) {
  var pkg = require(path.join(__dirname, 'package.json'));
  res.json({
      name: pkg.name,
      version: pkg.version,
      status: 'up'
  });
 });
 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: res.locals.message,
    error: res.locals.error
  });
 
});

module.exports = app;
