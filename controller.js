'use strick';

var response = require ('./res');
var connection = require ('./koneksi');

exports.index = function (req,res){
    response.ok("aplikasi rest berjalan",res);
};


//menampilkan semua data user
exports.tampilsemuauser = function (req,res){
    connection.query('SELECT * FROM user', function(error, rows, fields){
        if (error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }

    });
};

//menampilka semua data user berdasarkan id
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