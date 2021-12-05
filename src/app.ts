import * as yargs from 'yargs';
import notes from './notes';

yargs.version('1.0.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Create delete command
yargs.command({
  command: 'delete',
  describe: 'Delete a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.deleteNote(argv.title);
  }
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('Reading a note!');
  }
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: function () {
    console.log('Listing all notes!');
  }
});

yargs.argv;
