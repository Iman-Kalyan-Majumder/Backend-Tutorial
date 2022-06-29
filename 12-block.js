/*
    Blocking code in any one of the if blocks will cause all the other requests to be blocked.
    Thus use asynchronous code.
*/
const http=require('http');

const server = http.createServer((req,res)=>{
    if(req.url=='/')
        res.write('Home Page');
    else if(req.url=='/about')
    {
        //Blocking Code!
        for(let i=0;i<=10000;i++)
            for(let j=0;j<=1000;j++)
                console.log(`${i} ${j}`)
        res.write('About Page');
    }
    else
        res.write('404 Page Not Found!');
    res.end();
});

server.listen(5000,()=>{
    console.log('Listening on port 5000...');
});
