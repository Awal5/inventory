const mysql = require("mysql");
// buat konfigurasi koneksi
const koneksi = mysql.createConnection({
    host: "db4free.net",
    user: "rizkiawal2",
    password: "darahmuda2",
    database: "hanphone_data",
    multipleStatements: true,
});
// koneksi database
koneksi.connect((err) => {
    if (err) throw err;
    console.log("MySQL Connected...");
});
module.exports = koneksi;