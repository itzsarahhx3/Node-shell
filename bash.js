// output a prompt
// process.stdout.write('prompt > ');

// // input
// process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim(); //remove the newline that popped up

//   if (cmd !== 'pwd') {
//     process.stdout.write('You typed: ' + cmd);
//   } else {
//     process.stdout.write(process.cwd());
//   }
//   process.stdout.write('\nprompt > ');
// });

// we can access the pwd function and store it in a variable like so
const pwd = require('./pwd');

// if a user enters 'pwd' as an argument, we can then call it
pwd();
