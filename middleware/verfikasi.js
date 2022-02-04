const req = require('express/lib/request');
const jwt = require ('jsonwebtoken');
const config = require ('../config/secret');

function verifikasi (roles) {
    //cek authorizen header
    return function(req, rest, next){
    var tokenWithBearer = req.headers.authorization;
    if (tokenWithBearer){
        var token = tokenWithBearer.split(' ')[1];
        //verifikasi
        jwt.verify(token, config.secret, function (err, decoded){
            if (err){
                return resizeTo.status(401).send({auth:false, message: 'Token tidak terdaftar'});
            }else {
                if(roles==2){
                    req.auth = decoded;
                    next();
                }else {
                    return rest.status(401).send({auth: false, message: 'gagal mengotorisasi role anda'});
                }
            }
        });
     }else {
        return rest.status(401).send({auth: false, message:'Token tidak tersedia'});
        }
    }
}

module.exports = verifikasi;