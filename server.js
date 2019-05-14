const express = require("express");
const path = require("path");
var fs = require('fs');
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('app'));
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

app.listen(PORT, () => console.log("App listening on Port: " + PORT));

htmlRoutes(app, path, __dirname);

apiRoutes(app, __dirname);