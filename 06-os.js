const os=require('os');

const user=os.userInfo();
const uptime=os.uptime();//how long the system has been up
console.log(user);
console.log(uptime);

const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs);
