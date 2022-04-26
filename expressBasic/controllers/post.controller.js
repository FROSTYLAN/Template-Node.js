const { Post } = require('../models/post.model')

const getAllPosts = async (req, res) => {
    const posts = await Post.findAll();

    res.status(200).json({ posts });
};

const createPosts = async (req, res) => {
    const { title , content } = req.body;
    const newPost = await Post.create({ title, content });

    res.status(201).json({ newPost });
};

module.exports = { getAllPosts, createPosts };