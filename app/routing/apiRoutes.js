module.exports = function (app, base){

var friendsData = require("./../data/friends.js");
var diffArray = [];

app.get("/api/friends", function(req, res) {
    return res.json(friendsData);
  });

app.post("/api/survey", function(req, res) {

  const userAnswers = req.body.scores;
  diffArray = [];
  
  friendsData.forEach(friend => {
    
    var diff = 0;
    
    for (i=0; i<userAnswers.length; i++){
      diff += Math.abs(parseInt(userAnswers[i]) - parseInt(friend.scores[i]));

    }

    diffArray.push(diff);
    });

    const minIndex = diffArray.indexOf(Math.min(...diffArray));
 
friendsData.push(req.body);

  return res.json(friendsData[minIndex]);
  
});

};