module.exports = function (app, path, base){

app.get("/", function(req, res) {
  res.sendFile(path.join(base, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(base, "app/public/survey.html"));
});

};