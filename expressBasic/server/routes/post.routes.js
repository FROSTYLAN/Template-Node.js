const express = require('express');

//Middleware
const { postExists } = require('../middlewares/post.middlewares');

//controller
const {
  getAllPosts,
  createPosts,
  getPostById,
  updatePost,
  deletePost,
} = require('../controllers/post.controller');

const router = express.Router();

router.get('/', getAllPosts);

router.post('/', createPosts);

router
  .use('/:id', postExists)
  .route('/:id')
  .get(getPostById)
  .patch(updatePost)
  .delete(deletePost);

module.exports = { postsRouter: router };
