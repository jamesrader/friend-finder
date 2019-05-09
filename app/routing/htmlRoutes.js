module.exports = function (app, path, base){

app.get("/", function(req, res) {
  //res.sendFile(path.join(__dirname, "app/public/home.html"));
  res.sendFile(path.join(base, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  //res.sendFile(path.join(__dirname, "app/public/survey.html"));
  res.sendFile(path.join(base, "app/public/survey.html"));
});

};