const fs = require('fs');
fs.watch('files/target_a.txt', function() {
  console.log("The file 'target_a.txt' just changed! :3");
});
