const { Pool } = require('pg');

const pool = new Pool({
    user: 'trewyut',
    host: 'localhost',
    database: 'make-up',
    password: 'tuywert',
    port: 5432
});
// pool.query('SELECT * from news', (err, res) => {
//     let newsData = res.rows;
//     console.log(res.rows);
//     pool.end();
//     return newsData;
// });

let promise = new Promise((resolve) => {
    pool.query('SELECT * from news', (err, res) => {
        resolve(res.rows);
        pool.end();
    });
});
// promise.then(
//     response => {        
//         // let news = JSON.parse(response);
//         console.log("adewfef = "+response[0].id);
//     }
// );
 exports.getData =  promise;
