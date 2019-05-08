const express = require("express");
const path = require("path");
var fs = require('fs');
var friends = require("./app/data/friends.js");

//console.log(friends);


const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('app'));
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

// App Start!
app.listen(PORT, () => console.log("App listening on Port: " + PORT));

eval(fs.readFileSync('./app/routing/htmlRoutes.js').toString());

eval(fs.readFileSync('./app/routing/apiRoutes.js').toString());