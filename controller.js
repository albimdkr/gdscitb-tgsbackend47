'use strick';

var response = require ('./res');
var connection = require ('./koneksi');

exports.index = function (req,res){
    response.ok("aplikasi rest berjalan",res);
};


//menampilkan semua data user GET 
exports.tampilsemuauser = function (req,res){
    connection.query('SELECT * FROM user', function(error, rows, fields){
        if (error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }

    });
};

//menampilkan semua data user berdasarkan id GET ID
exports.tampilberdasarkanid = function (req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM user WHERE id = ?', [id], 
    function(error, rows, fields){
        if (error){
             console.log (error);
        }else {
            response.ok(rows, res); 
        }
    });
};

//menambahkan data user POST
exports.tambahUser = function (req, res){
    var uname = req.body.uname;
    var pwd = req.body.pwd;

    connection.query('INSERT INTO user (uname,pwd) VALUES (?,?)',
    [uname, pwd],
    function (error, rows, fields){
        if (error){
            console.log(error);
        } else {
            response.ok("Berhasil menambahkan data user", res)
        }
    });

};
