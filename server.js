var express = require("express");
var routes = require('./app/routes/uploadFile.js');
var app = express();

app.use(express.static(process.cwd() + '/public'));
app.use(express.static(process.cwd() + 'uploads'));



routes(app);



var port = process.env.PORT || 3000;
app.listen(port, function  () {
	console.log("Listening at port " +port);
})