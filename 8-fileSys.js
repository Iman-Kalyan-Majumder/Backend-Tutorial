//all the operations are synchronous
const {readFileSync,writeFileSync}=require("fs");

const first = readFileSync("./content/first.txt","utf-8");
const second = readFileSync("./content/second.txt","utf-8");

console.log(first);
console.log(second);

writeFileSync("./content/third.txt",first+'\n'+second,{flag:'a'});//Use {flag:'a'} to append to an existing file