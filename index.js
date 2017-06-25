var vhost = require("vhost");
var express = require("express");

function default_page(req, res) {
    res.send("Hello World!");
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
    .use(vhost("hello.*", require("./hello.js").app))
    .post("/git", git_update)
    .get("/", default_page)
    .listen(3000, function () {
        console.log("Server created");
    });
