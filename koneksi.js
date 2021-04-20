var mysql = require('mysql');

// buat koneksi ke database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbrestapi'
});
// cek koneksi
connection.connect((err)=>{
    if(err) throw err;
    console.log('Berhasil menghubungkan ke database');
})
// Export module koneksi
module.exports = connection;