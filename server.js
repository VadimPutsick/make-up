
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();
// const config = require('./webpack.config.js');
// const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.

// .use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath
// }))
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://postgres:123456789@host:5432/postgres");

db.one("SELECT $1 AS value", 123)
    .then(function (data) {
        console.log("DATA:", data.value);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
app
.use(express.static(path.join(__dirname, 'dist')))
// .set('dist', './dist')
// .set('dist engine', 'pug')
// .get('/',function (req, res) {
//    res.render('index')
// }) 
.get('/table', function (req, res) {
  res.send('about');
})
.get('/about', function (req, res) {
  res.send('about');
})
.listen(PORT, () => console.log(`Listening on ${ PORT }`))