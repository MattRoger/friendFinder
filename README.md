# Sci-fi Friend Finder! :alien:
## A web app to find your sci-fi friend

The user starts the by entering their name and adding a link to their photo. They are then asked how strongly they agree or disagree with 10 questions. The user information is placed into the friends.json file in the friends array.

The user's answers are then compared with other users in the friends array to return the most compatible user.


## Tech used
* Javascript
* node.js
* bootstrap
* express.js


`$("#submit").on("click", function(event) {
    event.preventDefault();
 function validateForm() {
    var isValid = true;
    $(".form-control").each(function() {
      if ($(this).val() === "") {
        isValid = false;
      }
    });

    $(".chosen-select").each(function() {

      if ($(this).val() === "") {
        isValid = false;
      }
    });
    return isValid;
  }
  if (validateForm()) {
    var userData = {
      name: $("#name").val(),
      photo: $("#photo").val(),
      scores: [
        $("#q1").val(),
        $("#q2").val(),
        $("#q3").val(),
        $("#q4").val(),
        $("#q5").val(),
        $("#q6").val(),
        $("#q7").val(),
        $("#q8").val(),
        $("#q9").val(),
        $("#q10").val()
      ]
    }`
