const fs = require('fs');
const chalk = require('chalk');

const listNotes = () => {
  const notes = loadNotes();
  if(notes.length) {
    console.log(chalk.green.underline("Your notes: \r\n"));
    notes.forEach((n)=>console.log(n.title));
  }
  else {console.log(chalk.yellow.underline('It appears you got 0 notes. Use the appropriate add command to get started!'));
  }
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicate = notes.find(n => n.title === title);
    if (!duplicate) {
      notes.push({title, body});
      saveNotes(notes);
      console.log('Added a new note for you!');
    } else {
      console.log('Call in the FAIL ARMY! this note title is taken!');
    }

};

const removeNote = (title) => {
  const existingNotes = loadNotes();
  let survivingNotes = existingNotes.filter(a => a.title !== title);
  saveNotes(survivingNotes);
  survivingNotes.length!==existingNotes.length?
    console.log(chalk.red.underline('Removing the note @' + title + '!!! Sorry there is no turning back! :(((')) :
    console.log(chalk.yellow.underline('We did not find your note...please, retry'));

};

const readNote = (title) => {
  const notes = loadNotes();
  const target = notes.find(n => n.title === title);
  if(target){
    console.log(chalk.inverse('Title:' + target.title));
    console.log('Body:' + target.body);
  } else  {
    console.log(chalk.yellow.underline('We did not find your note...did you do a typo?'));
  }
};

const saveNotes = (notes) => {
  const entry = JSON.stringify(notes);
  fs.writeFileSync('notes.json', entry);
};

const loadNotes = () => {
  try{
    const dataBuff = fs.readFileSync('notes.json'),
      dataJSON = dataBuff.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  listNotes:  listNotes,
  addNote:    addNote,
  removeNote: removeNote,
  readNote:   readNote
};