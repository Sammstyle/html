console.log("%cHello, World", "color: blue; font-size: 40px;");
try {
    console.log(variabelyangtidakada);
} catch (err) {
    console.error("Ada masalah di baris 2: " + err.message);
}
console.error('ini adalah pesan error')
try {
  let hasil = 10 / 0;
} catch (error) {
  console.error('Terjadi kesalahan: ' + error.message);
}
