module.exports = function () {
    
  process.stdout.write('prompt > ');

  // input
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); //remove the newline that popped up

    if (cmd !== 'pwd') {
      process.stdout.write('You typed: ' + cmd);
    } else {
      process.stdout.write(process.cwd());
    }
    process.stdout.write('\nprompt > ');
  });
};
