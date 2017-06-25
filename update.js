const express = require("express");
const app = express();

app.get("/", function(req, res) {
    console.log("Updating Git Repo");
});

exports.app = app
