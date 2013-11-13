/*
 * Serve JSON to our AngularJS client
 */

// For a real app, you'd make database requests here.
// For this example, "data" acts like an in-memory "database"
var data = {
  "posts": [
    {
      "title": "Lorem ipsum",
      "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      "title": "Sed egestas",
      "text": "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus."
    }
  ]
};

var mongoose = require('mongoose');
var postdata = require('../model/posts');
// GET

exports.posts = function (req, res) {

  postdata.allposts(function(err, dbposts){
    res.json({ posts: dbposts });
  });

};

exports.post = function (req, res) {
  var id = req.params.id;

  //console.log('route/api/post/id: ' + id);

  postdata.findbyid(id, function(err, dbpost){
    console.log('route/api/post/dbpost: ' + dbpost);

      res.json({ post: dbpost });
  });

};

// POST

exports.addPost = function (req, res) {
  data.posts.push(req.body);
  res.json(req.body);
};

// PUT

exports.editPost = function (req, res) {
  var id = req.params.id;

  console.log('route/api/editPost/id: ' + id);

  postdata.findbyid(id, function(err, dbpost){
    dbpost = req.body;
    res.json(true);
  });
  
};

// DELETE

exports.deletePost = function (req, res) {
  var id = req.params.id;

  if (id >= 0 && id < data.posts.length) {
    data.posts.splice(id, 1);
    res.json(true);
  } else {
    res.json(false);
  }
};