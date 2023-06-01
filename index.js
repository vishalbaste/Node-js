const person = require('./secound');
const http = require('http');

const server = http.createServer((req,responce)=>
{
    responce.writeHead(200,{'Content-Type' : 'text/html'})
    const obj = new person();
    responce.write(obj.name);
    responce.end();
    console.log('Server Lisaning on 8090');
});

server.listen(8090);