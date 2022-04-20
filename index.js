
const http = require('http');
const { parse } = require('node:path/win32');

const users = [
    { id: 1, name: 'Joe' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Sara' }
]; 

const posts = [
    { id: 1, title: 'post1' },
    { id: 2, title: 'post2' },
    { id: 3, title: 'post3' }
];

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (method === 'GET' && url === '/users') {
        // Return users List
        res.write(JSON.stringify({ users }));

    } else if (method === 'GET' && url === '/posts') {
        res.write(JSON.stringify({ posts }));

    } else if (method === 'POST' && url === '/users') {
        const userData = [];
        req.on('data', (chunk) => {
            userData.push(chunk);
        });
        req.on('end', () => {
            const parseData = Buffer.concat(userData).toString();
            const name = parseData.split('=')[1];
            
            const newUser = {
                id: Math.floor(Math.random()* 1000),
                name
            };

            users.push(newUser);
        });

    } else if (method === 'POST' && url === '/posts') {
        const postData = [];
        req.on('data', (chunk) => {
            postData.push(chunk);
        });
        req.on('end', () => {
            const parseData = Buffer.concat(postData).toString();
            const title = parseData.split('=')[1]

            const newPost = {
                id: Math.floor(Math.random()*1000),
                title
            }

            posts.push(newPost);
        });

    } else {
        res.write(`${url} is not a valid endpoint`); 
    }

    res.end();
});

const PORT = 3000;
server.listen(PORT);