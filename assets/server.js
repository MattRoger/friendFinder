
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// require("./routes/apiRoutes")(app);
require("../assets/htmlRoutes.js")(app);
// require("../assets/survey.js");




app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
