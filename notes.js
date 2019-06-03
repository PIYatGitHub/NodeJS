const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'returning your notes!';
};

const addNote = (title, body) => {
    const notes = loadNotes();
    let duplicates = notes.filter(a => a.title=== title).length;
    if (!duplicates) {
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
  getNotes:getNotes,
  addNote: addNote,
  removeNote: removeNote,
};