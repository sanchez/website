var vhost = require("vhost");
var express = require("express");
var fs = require("fs");

var indexPageContent;
fs.readFile("./index.html", function(err, data) {
    if (err === undefined) {
        console.log("Error occured while reading index file");
        console.log(err);
        indexPageContent = "Hello There, something went wrong on the server";
    } else {
        indexPageContent = data;
    }
});

function default_page(req, res) {
    console.log("Get /");
    res.type('html');
    res.send(indexPageContent);
}

function git_update(req, res) {
    console.log("Updating Git Repo");
    var spawn = require("child_process").spawn;
    var gitPull = spawn("git", ["spawn"]);
    var spawn = require("child_process").spawn;
    spawn("git", ["pull"], { stdio: "inherit" });
    res.send("Updated");
}

express()
    .use(express.static("src"))
    .use(vhost("hello.*", require("./hello.js").app))
    .get("/aphrodite", require("../aphrodite").app)
    .post("/git", git_update)
    .get("/", default_page)
    .listen(3000, function () {
        console.log("Server created");
    });
