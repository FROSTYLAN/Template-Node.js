
const http = require('http'); // import http from 'http' (importamos la libreria http)

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

const server = http.createServer((req, res) => { // Me crea el servidor (request, response)
    const url = req.url; // /user

    if (url === '/users') {
        // Return users List
        res.write(JSON.stringify({ users }));
    } else if (url === '/posts') {
        res.write(JSON.stringify({ posts }));
    } else {
        res.write(`${url} is not a valid endpoint`); 
    }

    res.end();
}); // como parámetros petición y respuesta

const PORT = 3000;

// http://localhost:PORT
server.listen(PORT); // Pone a escuchar al servidor (abre el event-loop)