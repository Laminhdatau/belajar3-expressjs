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

//WAJIB DI BAWAH
app.get("*", (req, res) => {
  res.send("<h1>Halaman Yang Anda Akses Tidak Tersedia");
});
app.listen(3000, () => {
  console.log(`Server started on http://localhost:3000/`);
});
