// file system
const fs = require('fs');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  console.log(cmd);
  // files: ['bash.js', 'pwd.js']
  // err: prompt we typed
  fs.readdir('./', 'utf8', (err, files) => {
      // get all the files 
    if (cmd === 'ls') {
      process.stdout.write(files.join('\n'));
      process.stdout.write('prompt > ');
    } else if (err) {
      throw err;
    }
  });
});
