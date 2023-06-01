const http = require('http');
const fs = require('fs').promises;
http.createServer((req,responce)=>
{
    fs.readFile('index.html')
      .then(Content=>
      {
            responce.setHeader("Content-Type", "text/html");
            responce.writeHead(200);
            responce.end(Content);

      });
}).listen(8090,'127.0.0.1',()=>
{
    console.log('Server Lisaning on 8090');
});