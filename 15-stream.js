const {createReadStream} = require('fs');
const http = require('http');

//const stream = createReadStream('./index.html',{'highWaterMark':100,'encoding':'utf-8'});
/*

stream.on('data',(result)=>{
    console.log(result);
});

stream.on('error',(error)=>{
    console.log(error);
})

*/

http.createServer((req,res)=>{
    console.log('Listening...');
    const stream = createReadStream('./index.html',{'highWaterMark':100});
    stream.on('open',()=>{
        stream.pipe(res);
    });
    stream.on('error',(err)=>{
        res.end(err);
    })
}).listen(5000);
