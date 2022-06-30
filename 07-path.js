const path = require("path");

console.log(path.sep);//separator (varies according to the OS)

const filePath=path.join("./content","subfolder","text.txt");//returns the concatenated path by using path.sep as delimiters
console.log(filePath);

const base =path.basename(filePath);//last file/folder in the file path
console.log(base);

const absolutePath = path.resolve(__dirname,"content","subfolder","test.txt");//absolute path, i.e., C:/Users/Bapu Mazumder/Desktop and so forth...
console.log(absolutePath);
