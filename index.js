var vhost = require("vhost");
var express = require("express");

function default_page(req, res) {
    res.send("This feature is currently not supported");
}

function git_update(req, res) {
    console.log("Updating Git Repo");
    var exec = require("child_process").exec;
    exec("git pull", function(error, stdout, stderr) {
        if (error !== undefined) {
            console.log("Error: " + error);
            console.log("stderr:" + stderr);
        }
    });
    res.send("Updated");
}

express()
    .use(vhost("hello.*", require("./hello.js").app))
    .post("/git", git_update)
    .listen(80, function () {
        console.log("Server created");
    });
