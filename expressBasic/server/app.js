const express = require('express');

// Routers
const { usersRouter } = require('./routes/users.routes');
const { postsRouter } = require('./routes/post.routes');

// Init express app
const app = express();

// Enable incoming JSON data
app.use(express.json());

//Endpoint
// http: //localhost:3000/api/v1/users
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/posts', postsRouter);

module.exports = { app };
