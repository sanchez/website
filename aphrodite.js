const express = require("express");
const app = express();

app.set("view engine", "ejs")
app.set("views", __dirname + "/aphrodite/views")

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/style.css", function (req, res) {
    res.sendFile(__dirname + "/aphrodite/style/style.css");
});

exports.app = app
