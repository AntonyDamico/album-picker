const express = require("express"),
  app = express(),
  request = require("request"),
  bodyParser = require("body-parser");

// const lastfm = new LastFM("a171ec3fcfd66f5a44df363482f9caf0", {
//   userAgent: "MyApp/0.0.1"
// });

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

const albums = [
  {
    name: "Lonerism",
    artist: "Tame Impala",
    image:
      "https://lastfm-img2.akamaized.net/i/u/300x300/7c9c4d1009514b178c82f2201e3a1fce.png"
  },
  {
    name: "Será",
    artist: "La Vida Bohéme",
    image:
      "https://lastfm-img2.akamaized.net/i/u/300x300/a1ca4e4904534037a75ba38bade6e4ec.png"
  }
];

app.get("/", (req, res) => {
  res.render("index", { albums });
});

app.post("/", (req, res) => {
  albums.push(req.body);
  console.log("Album Added");
});

app.listen(3000, () => {
  console.log("Servidor en puerto 3000");
});
