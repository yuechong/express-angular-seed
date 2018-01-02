var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var http = require('http');
var helmet = require('helmet');
var fs = require('fs');

var index = require('./server/routes/index');
var users = require('./server/routes/users');

var api = require('./server/api/api');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(helmet());

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'error.log'), { flags: 'a' });
app.use(logger('combined', {
    skip: function (req, res) { return res.statusCode < 400 },
    stream: accessLogStream
}));
// app.use(express.static('public'));

app.use('/client', express.static(path.join(__dirname, 'client')));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/api', api);



// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

//设置跨域访问
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*'); //允许所有域
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); //您可以发送  POST和GET请求此服务。
    //X-Requested-With 并content-type 允许头文件。
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    res.header("Content-Type", "application/json;charset=utf-8");

    next();
});




http.createServer(app).listen(3000, function () {
    console.log('listen on port 3000');
});