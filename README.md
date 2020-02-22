# Sci-fi Friend Finder! :alien:
 A web app to find your sci-fi friend
 
 [Find your friend and see the app!](https://evening-sea-45437.herokuapp.com/)

## How to use?
The user starts the by entering their name and adding a link to their photo. They are then asked how strongly they agree or disagree with 10 questions. The user information is placed into the friends.json file in the friends array.

The user's answers are then compared with other users in the friends array to return the most compatible user.

## Tech used
* Javascript
* node.js
* bootstrap
* express.js

## Build Status
Ready to find friends :checkered_flag:

## Code style
### The friends api
sample
```javascript
var friends = [
    {
      name: "Rick Sanchez",
      photo: "https://vignette.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest/scale-to-width-down/310?cb=20160923150728",
      scores: [
        // q1
        "5",
        // q2
        "3",
        // q3
        "4",
        // q4
        "4",
        // q5
        "5",
        // q6
        "5",
        // q7
        "4",
        // q8
        "4",
        // q9
        "5",
        // q10
        "5"
      ]
    },
```
### The Survey page
```html
<div class="aboutContainer">
      <h3>About You</h3>
      <h4>Name (Required)</h4>
      <input type="text" id="name" class="form-control" required>
      <h4>Link to Photo Image (Required)</h4>
      <input type="text" id="photo" class="form-control" required>
    </div>

    <div class="questionContainer">
      <h3>Question 1</h3>
      <h4>The multiverse exist.</h4>
      <select class="chosen-select" id="q1">
        <option value=""></option>
        <option value="1">1 (Strongly Disagree)</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5 (Strongly Agree)</option>
      </select>
    </div>
```
#### The Results model
```javascript
 <div class="modal-content">
        <div class="modal-header">
          <button class="close" data-dismiss="modal">&times;</button>
          <h2 class="modal-title">Best Match</h2>
        </div>
        <div class="modal-body">
          <h2 id="match-name"></h2>
          <img id="match-img" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg" alt="">
        </div>
        <div class="modal-footer">
          <button class="submit button fBtn" data-dismiss="modal">Close</button>
        </div>
      </div>
```

### apiRoutes.js
This is how we enter a user into the api and compare exisiting friends
```javascript

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };
        var userData = req.body;
        var userScores = userData.scores;
        var totalDifference;

        for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            totalDifference = 0;
            console.log(currentFriend.name);
            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userScores[j];
                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }
            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDifference = totalDifference;
              }
            }
            friends.push(userData); 
            res.json(bestMatch);
        });
      }; 
```

## Tech/framework used
* Javascript
* Express
* Node
* Api

## Features

## Installation
* :trident: Fork it
* :sheep: Clone it


## API Reference

## Tests



## Credits / Contact information
* @MattRoger 
  * :man_office_worker: https://mattroger.github.io/
  * :e-mail: mattroger.webdev@gmail.com
  * :man_office_worker: www.linkedin.com/in/matt-roger/


## License
