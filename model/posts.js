// Posts model

var mongoose = require('mongoose');

// The function 'callback' is passed in and invoked with the results of the db call.
exports.allposts = function (callback){
	var Post = mongoose.model('Post');
	Post.find(function(err, posts){
		if (err){
			consolde.log(err);
		}
		else{
			//console.log(posts);
			callback("",posts);
		}
	}) 
} 