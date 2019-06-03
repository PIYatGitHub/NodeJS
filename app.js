'use strict';
const notes = require('./notes');
const validator = require('validator');
const chalk = require('chalk');

const command = process.argv[2];

switch (command) {
  case '-a': console.log('We are adding!'); break;
  case '-r': console.log('We are reading!'); break;
  case '-w': console.log('We are writing!'); break;
  case '-d': console.log('We are deleting!'); break;
  default: console.log('no command / invalid command provided!!!'); break;
}