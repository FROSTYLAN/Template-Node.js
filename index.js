
const http = require('http'); // import http from 'http' (importamos la libreria http)

const server = http.createServer((request, response) => { // Me crea el servidor
    console.log(request);
    response.end();
}); // como parámetros petición y respuesta

const PORT = 4000;

// http://localhost:PORT
server.listen(PORT); // Pone a escuchar al servidor (abre el event-loop)