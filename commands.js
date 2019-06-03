const yargs = require('yargs');
const notes = require('./notes');

yargs.command({
  command: 'add',
  describe: 'add your note',
  builder:{
    title: {
      describe:'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe:'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: 'remove',
  describe: 'remove your note',
  handler: function () {
    console.log('fire up that remove!');
  }
});

yargs.command({
  command: 'list',
  describe: 'list all your notes',
  handler: function () {
    console.log('fire up that list!');
  }
});

yargs.command({
  command: 'read',
  describe: 'read a note',
  handler: function () {
    console.log('fire up that read!');
  }
});
