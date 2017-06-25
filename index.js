var vhost = require("vhost");
var express = require("express");

function default_page(req, res) {
    res.send("Are you sure?");
}

function git_update(req, res) {
    console.log("Updating Git Repo");
    var spawn = require("child_process").spawn;
    var gitPull = spawn("git", ["spawn"]);
    gitPull.stdout.on('data', function(data) {
        console.log(data);
        gtPull.stdin.write("yes\n");
    });
    res.send("Updated");
}

express()
    .use(vhost("hello.*", require("./hello.js").app))
    .post("/git", git_update)
    .get("/", default_page)
    .listen(80, function () {
        console.log("Server created");
    });
