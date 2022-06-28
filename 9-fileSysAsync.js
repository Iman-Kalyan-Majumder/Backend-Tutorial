//all functions are asynchronous
const {readFile,writeFile}=require("fs");

//nested call-back.
readFile("./content/first.txt","utf-8",(error,result)=>{
    if(error)
        return;
    const first=result;
    readFile("./content/second.txt","utf-8",(error,result)=>{
        if(error)
            return;
        const second=result;
        writeFile("./content/third.txt",`${first}\n${second}\n`,{flag:'a'},(error,result)=>{
            if(error)
                console.log("Could Not Create File!");
            else
                console.log("File Created Successfully!");
        });
    });
});


//tried to assign the result to a variable but it showed an error.