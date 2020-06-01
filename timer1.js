let userAlarms = process.argv.splice(2);

for(let i = 0; i < userAlarms.length; i ++) {
    if (userAlarms[i] && userAlarms[i] >= 0) {
        setTimeout(() => {
            process.stdout.write('\x07');    
        }, userAlarms[i] * 1000);
    }
};