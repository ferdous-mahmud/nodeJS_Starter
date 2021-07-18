const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head>');
        res.write(
            '<body> <form method = "post" action = "/about"><input name = "message" /> </form> </body>'
        );
    } else if (req.url === '/about' && req.method === 'POST') {
        const dataArray = [];
        req.on('data', (data) => {
            dataArray.push(data);
        });
        res.write('About');
        req.on('end', () => {
            console.log('Stream finished');
            console.log(dataArray.toString());
        });
    }
    res.end();
});

const port = 3000;

server.listen(port);

console.log(`Listning on http://localhost:${port}`);
