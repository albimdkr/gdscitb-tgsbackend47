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

//menampilkan semua data user berdasarkan id GET 
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


//Mengubah data berdasarkan id PUT
exports.ubahUser = function (req,res) {
    var id = req.body.id;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
 
    connection.query('UPDATE user SET uname=?, pwd=? WHERE id=?', 
    [username,password,email,id],
        function (error, rows, field){
            if (error){
            console.log(error);
            }else {
            response.ok("berhasil mengubah Data", res)
        }
    
   });
 }

 //Menghapus data berdasarkan id DELEATE 
 exports.hapusUser = function (req, res){
     var id = req.body.id;
     connection.query('DELETE FROM user WHERE id=?', [id],
        function (error, rows, fields){
            if (error){
                console.log(error);
            }else {
                response.ok("Berhasil Hapus Data", res)
            }
        });
 }