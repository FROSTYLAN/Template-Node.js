const express = require('express');

// Routers
const { usersRouter } = require('./routes/users.routes')

//Utils
const { db } = require('./utils/database')
// Init express app
const app = express();

// Enable incoming JSON data
app.use(express.json());

//Endpoint
// http: //localhost:3000/api/v1/users
app.use('/api/v1/users', usersRouter);

app.get('/posts', (req, res) => {
    res.status(200).json({ posts });
});
app.post('/posts', (req, res) => {
    const { title } = req.body;
    const newPost = {
        id: Math.floor(Math.random() * 1000),
        title,
    }
    posts.push(newPost);
    res.status(201).json({ newPost });
});

db.authenticate()
    .then(()=>{console.log('database authenticate')})
    .catch(err => console.log(err))

// Spin up server
const PORT = 3000;
app.listen(PORT,() => {
    console.log(`Express app running on port: ${PORT}`);
})