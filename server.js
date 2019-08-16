const express = require('express');
const webpack = require('webpack');
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

app
    .use(express.static(path.join(__dirname, 'dist')))
    // .set('dist', './dist')
    // .set('dist engine', 'pug')
    // .get('/',function (req, res) {
    //    res.render('index')
    // })
    .get('/', function (req, res) {
        res.send('sdf');
    })
    .get('/table', function (req, res) {
        res.send('table');
    })
    .get('/about', function (req, res) {
        res.send('about');
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`))