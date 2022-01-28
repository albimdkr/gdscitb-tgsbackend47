'use strick';

module.exports = function (app){
    var jsonku = require ('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuauser); 

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanid);

    app.route('/tambah')
        .post(jsonku.tambahUser);

    app.route('/ubah')
        .put(jsonku.ubahUser);

    app.route('/hapus')
        .delete(jsonku.hapusUser);
};