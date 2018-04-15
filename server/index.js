var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mongo/index.js');
var app = express();
// -----------------------------------------------------------
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/../react-client/dist'));
// -----------------------------------------------------------
app.post('/items',function (req,res) {
var data = req.body
console.log(data)
db.save(data,function(err,data) {
	if(err){
		console.log("err")
	}
	res.send(data)
})
})

app.get('/items', function (req, res) {

  db.Item.find(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
    	var arr = []
    	for (var i = data.length - 1; i >= 0; i--) {
    		arr.push(data[i])
    	}
      res.send(arr);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

