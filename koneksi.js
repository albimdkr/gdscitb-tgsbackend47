var mysql = require ('mysql');

//membuat koneksi ke database

const conn = mysql.createConnection ({
    host:'localhost',
    user: 'root',
    password : 'albi-mdkr-2112',
    database: 'dbfilm'
});

//error kondisi

conn.connect ((err)=>{
    if (err) throw err;
    console.log('My sql success connect');
});

module.exports = conn; 