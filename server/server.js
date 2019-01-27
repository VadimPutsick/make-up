const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const hostname = '127.0.0.1';
const app = express();
const getData = require('./db').getData;

app
    .use(express.static(path.join(__dirname, 'dist')))
    .get('/table', function (req, res) {
        res.send('<p>Hi this is</p><p>Hahaha</p>');
    })
    .get('/table/second', function (req, res) {
        res.send('The second <p>Hahaha</p>');
    })
    .get('/about', function (req, res) {
        res.send('this is about and about');
    })
    .get('/data', function (req, res) {
        getData.then(
            response => {
            res.send(response);
                // // let news = JSON.parse(response);
                console.log("adewfef = " + response[0].id);
            }
        );
        
    })
    .listen(PORT, hostname, () => console.log(`Listening on ${PORT}`));