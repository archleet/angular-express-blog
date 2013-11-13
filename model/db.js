var mongoose = require('mongoose');

var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var postSchema = new mongoose.Schema({
	title: String,
	text: String
});

mongoose.model('Post', postSchema);
mongoose.connect('mongodb://localhost/blogdb');