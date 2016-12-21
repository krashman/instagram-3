const User = require('../../models/User');
const Post = require('../../models/Post');

module.exports = {
  readProfileInfo: function(req, res, next){
    if(req.params.username){
      User.findOne({username: req.params.username})
        .populate('notifications.user')
        .populate('following')
        .populate('followers')
        .exec((err, user) => {
          if(err) return res.status(500).json(err);
          return res.status(200).json(user);
        })
    }
  },
  getPostCount: function(req, res, next){
    if(req.params.id){
      Post.find({author: req.params.id})
        .populate('author')
        .populate('likes')
        .populate('comments.user')
        .exec((err, posts) =>{
          if(err) return res.status(500).json(err);
          return res.status(200).json(posts);
        })
    }
  }


}
