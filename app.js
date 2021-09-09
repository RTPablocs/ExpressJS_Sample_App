// Require group
const express = require('express');
const createError = require('http-errors')
const path = require('path')
const logger = require('morgan')
const indexRouting = require('./routes/index.js')

//Declaration group
const app = express()
const port = 3000


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')


app.use('/', indexRouting)


app.use(logger('dev'))

// Not found error handler
app.use(function (req, res, next) {
    next(createError(404))
})

// Render Errors with pug
app.use(function (err, req, res, next) {
    res.locals.err = err.message
    res.locals.error = req.app.get('env') == 'development' ? err : {}


    res.status(err.status || 500);
    res.render('error');
})


app.listen(port, () => {
    console.log('ExpressJS is running at port', port);
});