
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("../assets/apiRoutes.js")(app);
// require("../assets/survey.js")(app);
require("../assets/htmlRoutes.js")(app);




app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
