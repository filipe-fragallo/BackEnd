const Post = require("../models/posts")



exports.createPost = async(req,res)=>{
    const {title,body,pic} = req.body
    if(!title || !body || !pic){
        return res.status(400).json({msg:"Please add all fields"})
    }
    req.user.password = undefined
    const post = new Post({
        title,
        body,
        photo:pic,
        postedBy:req.user
    })
    post.save()
    .then(result=>{
        res.json({result,msg:"Created post successfully"})
    })
    .catch(err=>{
        return res.status(500).json({msg:err.message})
    })

}

exports.getAllPosts =async(req,res)=>{
    await Post.find({})
    .populate("postedBy","_id name pic")
    .populate("comments.postedBy","_id name pic")
    .sort("-createdAt")
    .then((posts)=>{
        res.status(200).json({posts})
    })
    .catch(err=>{
        res.status(500).json({msg:err.message})
    })
}

exports.likePost = async (req, res) => {
    try {
      const result = await Post.findByIdAndUpdate(
        req.body.postId,
        {
          $push: { likes: req.user._id },
        },
        { new: true }
      )
        .populate("postedBy", "_id name pic")
        .populate("comments.postedBy", "_id name pic")
        .exec();

      if (!result) {
        return res.status(400).json({ msg: "This post does not exist" });
      }

      res.json(result);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  };

  exports.unlikePost = async (req, res) => {
    try {
      const result = await Post.findByIdAndUpdate(
        req.body.postId,
        {
          $pull: { likes: req.user._id },
        },
        { new: true }
      )
        .populate("postedBy", "_id name pic")
        .populate("comments.postedBy", "_id name pic")
        .exec();

      if (!result) {
        return res.status(400).json({ msg: "This post does not exist" });
      }

      res.json(result);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  };


  exports.savePost = async (req, res) => {
    try {
      const saved = {
        savedBy: req.user._id,
        profilePic: req.user.pic,
        postId: req.body.postId,
      };

      const result = await Post.findByIdAndUpdate(
        req.body.postId,
        {
          $push: { saved: saved },
        },
        { new: true }
      )
        .populate("postedBy", "_id name pic")
        .populate("comments.postedBy", "_id name pic")
        .exec();

      if (!result) {
        return res.status(400).json({ msg: "This post does not exist" });
      }

      res.json(result);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  };

  exports.unSavePost = async (req, res) => {
    try {
      const result = await Post.findByIdAndUpdate(
        req.body.postId,
        {
          $pull: {
            saved: {
              savedBy: req.user._id,
              postId: req.body.postId,
              _id: req.body.savedId,
            },
          },
        },
        { new: true }
      )
        .exec();

      if (!result) {
        return res.status(400).json({ msg: "This post does not exist" });
      }

      res.json(result);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  };


  exports.addComment = async (req, res) => {
    try {
      const comment = {
        text: req.body.text,
        postedBy: req.user._id,
      };

      const result = await Post.findByIdAndUpdate(
        req.body.postId,
        {
          $push: { comments: comment },
        },
        { new: true }
      )
        .populate("postedBy", "_id name pic")
        .populate("comments.postedBy", "_id name pic")
        .exec();

      res.json(result);
    } catch (error) {
      res.status(422).json({ msg: error.message });
    }
  };

  exports.getAllComments = async (req, res) => {
    try {
      const posts = await Post.find({})
        .populate("comments", "_id text postedBy")
        .sort("-createdAt");

      res.json({ posts });
    } catch (error) {
      res.status(422).json({ msg: error.message });
    }
  };

  exports.deleteComment = async (req, res) => {
    try {
      const result = await Post.findByIdAndUpdate(
        req.body.postId,
        {
          $pull: {
            comments: {
              text: req.body.commentText,
              postedBy: req.body.commentPostedBy,
              _id: req.body.commentId,
            },
          },
        },
        { new: true }
      )
        .populate("postedBy", "_id name pic")
        .populate("comments.postedBy", "_id name pic")
        .exec();

      if (!result) {
        return res.status(422).json({ msg: "This post does not exist" });
      }

      res.json(result);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  };


  exports.deletePost = async (req, res) => {
    try {
      const post = await Post.findOneAndDelete({
        _id: req.params.postId,
        postedBy: req.user._id
      });

      if (!post) {
        return res.status(404).json({ msg: "Post not found" });
      }

      if (post.postedBy._id.toString() !== req.user._id.toString()) {
        return res.status(401).json({ msg: "Unauthorized" });
      }

      res.json({ msg: "Deleted post", result: post });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  };


  exports.explore = async (req, res) => {
    try {
      const explore = await Post.find({})
        .populate("postedBy", "_id name pic")
        .populate("comments.postedBy", "_id name pic");

      res.json(explore);
    } catch (error) {
      return res.status(500).json({ msg: "Something went wrong." });
    }
  };
