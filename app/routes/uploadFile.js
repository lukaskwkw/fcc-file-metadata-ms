var multer = require("multer");

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/')
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname)
	}
})



var upload = multer({ storage: storage , limits : { fileSize : 1048576, files : 1, parts : 1}});

module.exports = function  (app) {
	app.post('/fileanalyse', upload.single('the-file'), function  (req,res, next) {
		res.send("File size: " + String(req.file.size));
	})

	app.use(function errHandling (err,req,res,next) {
		if (err) {
			if (err.code=='LIMIT_FILE_SIZE')
				res.end("Error: " + 'File is to big. Choose file with size under 1 MB')
			else
				res.end(String(err));
		}
	})
}

