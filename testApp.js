#!/usr/bin/env node
"use strict";

/**
 * Module dependencies.
 */

var express = require("express");
var app = express();
var path = require("path");

// all environments
var port = process.env.PORT || 8080;

app.use(express.logger("dev"));
app.use(express.static(path.join(__dirname, "public")));

// development only
if ("development" == app.get("env")) {
  app.use(express.errorHandler());
}

app.get("/", function(req, res){
  res.sendfile("./index.html");
});


app.listen(port, function () {
	console.log("Listening on port: " + port);
});