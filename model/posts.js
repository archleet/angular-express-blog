// Posts model

var mongoose = require('mongoose');

// The function 'callback' is passed in and invoked with the results of the db call.
// Get all posts in posts collection.
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

// Get a specific post by id.
exports.findbyid = function findbyid(id, callback){
    console.log('model/posts/findbyid: ' + id);

    var Post = mongoose.model('Post');

    Post.find({_id: id}, function(err, post){
            if (err){
            	//console.log('model/posts/findbyid: error');
                console.log(err);
            }
            else{
                console.log('post: ' + post);
                if (post == null)
                    callback("",post);
                else {
                	// Return first (and should only) element of te returned array.
                    callback("", post[0]);
                }
            }
    }); 
}

exports.savePostById = function savePostById(postData, callback){

	var Post = mongoose.model('Post');

	// Lookup save syntax -- http://stackoverflow.com/questions/5024787/update-model-with-mongoose-express-nodejs?rq=1
	// Do I have to do a find before saving, I already have a fully populated model (in userData).
	// I guess you should just to verify that the record is still there.
	User.findById(postData._id, function(err, dbPost){
	        if (err){
	            console.log(err);
	        }
	        else {
	            dbPost.title = postData.title;
	            dbPost.text = postData.text;

	            // Save
	            dbPost.save(function(err){
	                if (err)
	                        console.log(err);
	                else {
	                        console.log('Saved');
	                        callback("", dbPost);
	                }
	            });
	        }
	        
	}); 