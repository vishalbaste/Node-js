const http = require('http');
const url = require('url');
const port = 8082;
const host = '127.0.0.1';
http.createServer((request,responce)=>
{
    responce.setHeader('Content-Type','text/html');
    responce.writeHead(200);
    let urlObj = url.parse(request.url,true);
    console.log(urlObj.query)
    responce.end(`<h1>Reqast Recevaid - ${request.url}</h1>`);
}).listen(port,host,()=>console.log(`Server is Running on http://${host}:${port}`));