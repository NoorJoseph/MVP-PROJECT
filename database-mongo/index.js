var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  todo: String,
  isDone: Boolean,
  description:String,
  deadLine:Number
  // id:Number.increments()
});

var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var save = function (data,callback) {
  var item = new Item(data)
  item.save(function(err,dataRes) {
    if(err){
      callback(err,null)
    }
    callback(null,dataRes)
  })
}


module.exports.selectAll = selectAll;
module.exports.Item = Item;
module.exports.save = save;

