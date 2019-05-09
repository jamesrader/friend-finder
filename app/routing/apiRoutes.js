module.exports = function (app, base){

//var friendsData = require("./app/data/friends.js");
var friendsData = require("./../data/friends.js");
var diffArray = [];

app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

app.post("/api/survey", function(req, res) {
  console.log(req.body);
  const userAnswers = req.body.scores;
  diffArray = [];
  
  friendsData.forEach(friend => {
    
    console.log(friend.scores);
    console.log(userAnswers);

    var diff = 0;
    
    for (i=0; i<userAnswers.length; i++){
      diff += Math.abs(parseInt(userAnswers[i]) - parseInt(friend.scores[i]));
      console.log(diff);
    }
    diffArray.push(diff);
    });
    console.log(diffArray);
    const minIndex = diffArray.indexOf(Math.min(...diffArray));
    console.log(minIndex);
 
  return res.json(friendsData[minIndex]);
  
});

};