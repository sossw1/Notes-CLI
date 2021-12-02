const yargs = require('yargs');

yargs.version('1.0.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function () {
    console.log('Adding a new note!');
  }
});
