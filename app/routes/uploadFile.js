var multer = require("multer");
var fs = require("fs");


var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null,  process.cwd() + '/uploads/')
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname)
	}
})


var upload = multer({ storage: storage , limits : { fileSize : 1048576, files : 1, parts : 1}});

module.exports = function  (app) {
	app.post('/fileanalyse', upload.single('the-file'), function  (req,res, next) {
		res.json(req.file);

		// fs.unlink(req.file.path, function(err){
		// 	if (err)
		// 		throw err;
		// 	else
		// 		console.log("File: ", req.file.path, "has been deleted");
		// })
})


}

