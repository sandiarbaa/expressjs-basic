const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("we got request");
//   // console.dir(res);
//   // res.send("<h1>Hello World</h1>");
//   res.send({ message: "Halo" });
// });

app.get("/", (req, res) => {
  res.send("<h1>Homepage Web</h1>");
});

app.get("/cat", (req, res) => {
  res.send("Cat Page");
});

app.post("/cat", (req, res) => {
  res.send("Post Cat Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/blog/:judul", (req, res) => {
  // console.log(req.params);
  // res.send("Blog Page " + req.params.judul);
  // res.send("Blog Page");
  const { judul } = req.params;
  res.send(`Ini Postingan dengan judul: ${judul}`);
});

app.get("/blog/:category/:judul/:author", (req, res) => {
  const { category, judul, author } = req.params;
  res.send(
    `Blog dengan Kategori: ${category} | Author: ${author} | Judul: ${judul}`
  );
});

app.get("/search", (req, res) => {
  // console.log(req.query);
  const { q } = req.query;
  if (!q) {
    res.send(`<h1>Data not Found!</h1>`);
  }
  res.send(`<h1>Search Keyword: ${q}</h1>`);
});

app.get("*", (req, res) => {
  res.send("Page Not Found");
});

app.listen(8080, () => {
  console.log(`Server is running on http://localhost:8080`);
});
