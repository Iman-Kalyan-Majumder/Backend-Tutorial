const EventEmitter = require('events');
const http = require('http');
const {readFile} = require('fs');

const emitter = new EventEmitter();

emitter.on('response',(name,id)=>{
    console.log(`Data Received!\nName : ${name}\nID : ${id}`);
});

emitter.emit('response',"Iman Kalyan Majumder","2020EEB015");

// Another way of creating servers 

const server = http.createServer();

server.on('request',(req,res)=>{
    readFile('./index.html','utf-8',(err,data)=>{
        if(err)
            res.end();
        res.writeHead(200,{'Content-type':'text/html'});//sending an html file in NodeJS
        res.write(data);
        res.end();
    });
});

server.listen(5000);
