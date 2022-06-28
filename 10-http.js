const http = require('http');

const server = http.createServer((req,res)=>{
    const address = req.socket.localAddress;
    if(req.url==='/')
        res.write(`<h1 style="width:100vw;text-align:center;color:blue;">Welcome to our home page!</h1>`);
    else if(req.url==='/Address')
        res.write(`<h1 style="width:100vw;text-align:center;color:blue;">Your IP address is ${address}!</h1>`);
    else
        res.write(`<h1 style="width:100vw;text-align:center;color:blue;">404</h1><a href="/" style="width:100vw;text-align:center;color:red;">Back Home</a>`);
    res.end();
});

server.listen(5000);