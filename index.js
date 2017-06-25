var vhost = require("vhost");
var express = require("express");

function default_page(req, res) {
    res.send("This feature is currently not supported");
}

function git_update(req, res) {
    console.log("Updating Git Repo");
    res.send("Updated");
}

express()
    .use(vhost("hello.*", require("./hello.js").app))
    .get("/git", git_update)
    .listen(80, function () {
        console.log("Server created");
    });
