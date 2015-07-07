var express = require("express"),
    path = require("path"),
	app = express();
var views = path.join(__dirname, "views");
app.use(express.static(path.join(__dirname, '/public')));

app.use('/bower_components', express.static(path.join(__dirname,'/bower_components')));

app.get("/", function (req, res) {
  var homePath = path.join(views, "home.html");
  res.sendFile(homePath);
});

app.post("/", function (req, res) {
  
});
app.listen(3000, function () {
  console.log("Running!");
});