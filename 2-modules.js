const util=require("./4-util.js");//since in util.js module.exports is not set to an object, util will directly acquire all the properties of the function sayHi
const {firstname,lastname}=require("./3-names.js");//de-structuring 
const alt=require('./5-alt');//alt.js returns an array and an object enclosed within an object

const name=`${firstname} ${lastname}`;
util(name);

let myName="";
alt.name.forEach(item=>{
    myName+=item+" ";
});//appends each item in the array to myName

console.log(myName);
console.log(alt.city.city);
