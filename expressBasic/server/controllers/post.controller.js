const { Post } = require('../models/post.model');
const { User } = require('../models/user.model');

const getAllPosts = async (req, res) => {
  const posts = await Post.findAll({
    include: [{ model: User }],
  });

  res.status(200).json({ posts });
};

const createPosts = async (req, res) => {
  const { title, content, userId } = req.body;
  const newPost = await Post.create({ title, content, userId });

  res.status(201).json({ newPost });
};

const getPostById = async (req, res) => {
  try {
    const { post } = req;
    res.status(200).json({ post });
  } catch (error) {
    console.log(error);
  }
};

const updatePost = async (req, res) => {
  try {
    const { post } = req;
    const { title, content } = req.body;
    await post.update({ title, content });
    res.status(200).json({ status: 'sucess' });
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (req, res) => {
  try {
    const { post } = req;
    await post.update({ status: 'deleted' });
    res.status(200).json({ status: 'sucess' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllPosts,
  createPosts,
  getPostById,
  updatePost,
  deletePost,
};
