'use strict';
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

yargs.command({
  command: 'add',
  describe: 'add your note',
  handler: function () {
    console.log('fire up that add!');
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
    console.log('fire up that lit!');
  }
});

yargs.command({
  command: 'read',
  describe: 'read a note',
  handler: function () {
    console.log('fire up that read!');
  }
});

console.log(yargs.argv);