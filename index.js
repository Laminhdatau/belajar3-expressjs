const express = require("express");

const app = express();

// app.use((req, res) => {
//   res.send("Ini dashboard");
// });

app.get("/", (req, res) => {
  res.send("INI HOME");
});

app.get("/cats", (req, res) => {
  res.send("Ini cats");
});

app.get("/about", (req, res) => {
  res.send("ini about");
});

app.get("/blog/:judul", (req, res) => {
  //   console.log(req.params);
  //   res.send("blog inibro");
  const { judul } = req.params;
  res.send(`Kita sedang berada di halaman: ${judul}`);
});

// url banyak uri
app.get("/blog/:categori/:judul/:jenis", (req, res) => {
  const { categori } = req.params;
  const { judul } = req.params;
  const { jenis } = req.params;

  res.send(
    `Kita mau ambil data dengan kategori: ${categori} dengan judul: ${judul} dengan jenis:${jenis}`
  );
});

//MENANGKAP PARAMETER QUERY STRING
// http://localhost:3000/search?kategori=1&lima=2

// app.get("/search", (req, res) => {
//   console.log(req.query);
// });

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send(`<h1>Tidak dapat mencari apa yang kamu cari</h1>`);
  }
  res.send(`<h1>Pencarian anda adalah : ${q}</h1>`);
});

//WAJIB DI BAWAH
app.get("*", (req, res) => {
  res.send("<h1>Halaman Yang Anda Akses Tidak Tersedia");
});
app.listen(3000, () => {
  console.log(`Server started on http://localhost:3000/`);
});
