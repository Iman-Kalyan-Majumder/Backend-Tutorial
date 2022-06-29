const {readFile,writeFile} = require('fs').promises;

const start = async() => {
    try
    {
        const first = await readFile('./content/first.txt');
        const second = await readFile('./content/second.txt');
        const content = `${first}\n${second}\n`;
        await writeFile('./content/third.txt',content,{flag:'a'});
    }
    catch(error)
    {
        console.log(error);
    }
}

start();

/*

getText('./content/third.txt').then(result => console.log(result)).catch(error => console.log(error));

*/

/*

const getText = (path) => {
    return new Promise((resolve,reject) => {
        readFile(path,'utf-8',(err,data)=>{
            if(err)
                reject(err);
            else
                resolve(data);
        });
    });
};

const writeText = (path,content) => {
    return new Promise((resolve,reject) => {
        writeFile(path,content,{flag:'a'},(err,data) => {
            if(err)
                reject(err);
            else
                resolve(data);
        })
    })
}

*/
    
/*

const util = require('util');

const getText = util.promisify(readFile);
const writeText = util.promisify(writeFile);

*/
