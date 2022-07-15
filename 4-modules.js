const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// system uptime
const uptime = os.uptime();
let measuredTime = new Date(null);
measuredTime.setSeconds(uptime);
console.log(measuredTime.toISOString().substr(11, 8));

// cpus
const t = os.cpus();
console.log(t);

// os name
const osName = os.type();
console.log(osName);

// os release
const release = os.release();
console.log(release);

// total memory - free memory
const totalMem = os.totalmem();
const freeMem = os.freemem();
console.log(totalMem, freeMem);