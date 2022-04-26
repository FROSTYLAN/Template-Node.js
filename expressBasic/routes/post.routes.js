const express = require('express');

//controller
const { getAllPosts, createPosts } = require('../controllers/post.controller')

const router = express.Router();

router.get('/', getAllPosts);

router.post('/', createPosts);

module.exports = { postsRouter : router }