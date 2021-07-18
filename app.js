const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello World');
    res.end();
});

const port = 3000;

server.listen(port);

console.log(`Listning on http://localhost:${port}`);

/* let counter = 0;

server.on('connection', () => {
    counter += 1;
    console.log(`Connction no ${counter} comes`);
}); */
