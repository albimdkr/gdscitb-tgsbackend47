var mysql = require ('mysql');

//membuat koneksi ke database

const conn = mysql.createConnection ({
    host:'localhost',
    user: 'root',
    password : 'albi-mdkr-2112',
    database: 'dbfilm'
});

//error konsssssdisi

conn.connect ((err)=>{
    if (err) throw err;
    console.log('Mysql success connect');
});

module.exports = conn; 