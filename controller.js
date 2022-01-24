'use strick';

var response = require ('./res');
var connection = require('./koneksi');

export.index = function (req,res){
    response('aplikasi rest berjalan');
};
