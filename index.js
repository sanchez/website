var vhost = require("vhost");
var express = require("express");

function default_page(req, res) {
    res.send("This feature is currently not supported");
}

express()
    .use(vhost("hello.*", require("./hello.js").app))
    .use(vhost("*", default_page))
    .listen(3000, function () {
        console.log("Server created");
    });
