import Post from "../models/Post.js";
import User from "../models/User.js";

/* CREATE */
export const createPost = async (req, res) => {
    try {
        const { userId, description, picturePath } = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: []
        });

        await newPost.save(); // saving the new post

        const post = await Post.find(); // fetch the updated Posts Collection

        return res.status(201).json(post);
    } catch (err) {
        return res.status(409).json({ message: err.message }); // request conflicting with the current state of the target resource
    }
}

/* READ */
export const getFeedPosts = async (req, res) => {
    try {
        const post = await Post.find(); // fetch all the Posts from Post Collection
        return res.status(200).json(post);
    } catch (err) {
        return res.status(404).json({ message: err.message });
    }
}

export const getUserPosts = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.find({ userId: id }); // fetch the post based on postId
        return res.status(200).json(post);
    } catch (err) {
        return res.status(404).json({ message: err.message });
    }
}

/* UPDATE */
export const likePost = async (req, res) => {
    try {
        const { id } = req.params; // id of the post
        const { userId } = req.body; // id of the user who's liking the post
        
        const post = await Post.findById(id);
        const isLiked = post.likes.get(userId); // check for post liked by userId

        if (isLiked) {
            post.likes.delete(userId); // remove like if already liked
        } else {
            post.likes.set(userId, true); // add userId to the liked map, if not already liked
        }

        // updating post likes in the DB
        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { likes: post.likes },
            { new: true} //true means: updated doc will be returned
        )
        return res.status(200).json(updatedPost);
    } catch (err) {
        return res.status(404).json({ message: err.message });
    }
}