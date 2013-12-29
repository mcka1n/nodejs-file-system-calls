// NodeJS file watcher script.
// Dec 26, 2013 ~ 6:20 PM

const 
  fs = require('fs');
  filename = process.argv[2];

if (!filename) {
  throw Error('A file to watch must be specified in the params.');
}

fs.watch(filename, function() {
  console.log("The file '" + filename + "' just changed! :3");
});
console.log('Node is now watching' + filename+ ' for changes ...');
