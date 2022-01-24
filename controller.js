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
            connection.log(error);
        }else {
            response.ok(rows, res)
        }

    });
};