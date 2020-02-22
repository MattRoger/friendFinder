# Sci-fi Friend Finder! :alien:
 A web app to find your sci-fi friend

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


## Tech/framework used

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
