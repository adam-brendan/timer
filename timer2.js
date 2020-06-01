
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Options: \n1) Type 'b' for an automatic beep \n2) Type a number between 1 and 9 to set a timer \n3) Type ctrl + c to exit \nInput: ", (response) => {
    if (response === "b") {
        process.stdout.write('\x07');
    }
    if (response >= 1 && response <= 9) {
        setTimeout(() => {
            process.stdout.write('\x07');    
        }, response * 1000);
    }
    rl.close();
})

rl.on('SIGINT', () => {
    process.stdout.write("Thanks for using me, ciao!\n");
    rl.close();
});